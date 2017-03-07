import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Group } from './group';

@Injectable()
export class GroupsService {

  private groupsUrl: string = 'api/groups';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getGroups(): Promise<Group[]> {
    return this.http.get(this.groupsUrl)
      .toPromise()
      .then(groups => groups.json().data as Group[])
      .catch(this.handleError);
  }

  updateGroup(group: Group): Promise<Group> {
    const url: string = `${this.groupsUrl}/${group.id}`;
    return this.http
      .put(url, JSON.stringify(group), { headers: this.headers })
      .toPromise()
      .then(() => group)
      .catch(this.handleError);
  }

  createGroup(group: Object): Promise<Group> {
    return this.http
      .post(this.groupsUrl, JSON.stringify(group), { headers: this.headers })
      .toPromise()
      .then(group => group.json().data)
      .catch(this.handleError);
  }

  deleteGroup(id: number): Promise<void> {
    const url: string = `${this.groupsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Data not found', error);
    return Promise.reject(error.message || error);
  }

}
