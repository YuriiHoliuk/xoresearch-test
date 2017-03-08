import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService {

  createDb() {
    let groups = [
      {id: 0, title: "work"},
      {id: 1, title: "family"},
      {id: 2, title: "customers"},
      {id: 3, title: "friends"}
    ];
    let contacts = [
      {id: 1, firstName: "john", surname: "johnson", age: 45,  group: "work", description: "boss", note: ""},
      {id: 2, firstName: "abigail", surname: "smith", age: 32,  group: "family", description: "wife", note: ""},
      {id: 3, firstName: "robert", surname: "jones", age: 27,  group: "friends", description: "best friend", note: ""},
      {id: 4, firstName: "mary", surname: "brown", age: 36,  group: "work", description: "colleague", note: ""},
      {id: 5, firstName: "linda", surname: "davis", age: 63,  group: "customers", description: "urgent orders", note: ""},
      {id: 6, firstName: "barbara", surname: "miller", age: 31,  group: "friends", description: "classmate", note: ""},
      {id: 7, firstName: "thomas", surname: "wilson", age: 19,  group: "customers", description: "regular customer", note: ""},
      {id: 8, firstName: "paul", surname: "moore", age: 46,  group: "customers", description: "old customer", note: ""},
      {id: 9, firstName: "mark", surname: "taylor", age: 40,  group: "work", description: "sales", note: ""},
      {id: 10, firstName: "karen", surname: "anderson", age: 58,  group: "family", description: "sister", note: ""},
      {id: 11, firstName: "george", surname: "thomas", age: 32,  group: "friends", description: "drink a lot of beer", note: ""},
      {id: 12, firstName: "james", surname: "smith", age: 15, group: "family", description: "son", note: ""}
    ];
    return { groups, contacts };
  }

}
