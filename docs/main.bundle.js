webpackJsonp([1,4],{

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsService = (function () {
    function ContactsService(http) {
        this.http = http;
        this.contactsUrl = 'api/contacts';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ContactsService.prototype.getContacts = function () {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(function (contacts) { return contacts.json().data; })
            .catch(this.handleError);
    };
    ContactsService.prototype.getContact = function (id) {
        var url = this.contactsUrl + "/" + id;
        return this.http
            .get(url)
            .toPromise()
            .then(function (contact) { return contact.json().data; })
            .catch(this.handleError);
    };
    ContactsService.prototype.updateContact = function (contact) {
        var url = this.contactsUrl + "/" + contact.id;
        return this.http
            .put(url, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(function () { return contact; })
            .catch(this.handleError);
    };
    ContactsService.prototype.createContact = function (contact) {
        return this.http
            .post(this.contactsUrl, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(function (contact) { return contact.json().data; })
            .catch(this.handleError);
    };
    ContactsService.prototype.deleteContact = function (id) {
        var url = this.contactsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ContactsService.prototype.handleError = function (error) {
        console.error('Data not found', error);
        return Promise.reject(error.message || error);
    };
    ContactsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ContactsService);
    return ContactsService;
    var _a;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/contacts.service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsService = (function () {
    function GroupsService(http) {
        this.http = http;
        this.groupsUrl = 'api/groups';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    GroupsService.prototype.getGroups = function () {
        return this.http.get(this.groupsUrl)
            .toPromise()
            .then(function (groups) { return groups.json().data; })
            .catch(this.handleError);
    };
    GroupsService.prototype.updateGroup = function (group) {
        var url = this.groupsUrl + "/" + group.id;
        return this.http
            .put(url, JSON.stringify(group), { headers: this.headers })
            .toPromise()
            .then(function () { return group; })
            .catch(this.handleError);
    };
    GroupsService.prototype.createGroup = function (group) {
        return this.http
            .post(this.groupsUrl, JSON.stringify(group), { headers: this.headers })
            .toPromise()
            .then(function (group) { return group.json().data; })
            .catch(this.handleError);
    };
    GroupsService.prototype.deleteGroup = function (id) {
        var url = this.groupsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    GroupsService.prototype.handleError = function (error) {
        console.error('Data not found', error);
        return Promise.reject(error.message || error);
    };
    GroupsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GroupsService);
    return GroupsService;
    var _a;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/groups.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClockComponent = (function () {
    function ClockComponent() {
        this.width = 481;
        this.height = 481;
    }
    ClockComponent.prototype.ngAfterViewInit = function () {
        var ctx = this.clock.nativeElement.getContext("2d");
        var centerX = 241;
        var centerY = 241;
        var outerRadius = 240;
        var bigRadius = 6;
        var littleRadius = 3;
        var dotsRadius = outerRadius - 15;
        var circleKoef = 2 * Math.PI;
        var radKoef = Math.PI / 180;
        var rotate45 = Math.PI / 2;
        var secLength = dotsRadius;
        var minLength = secLength - 70;
        var hourLength = minLength - 50;
        function drawDial() {
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX + outerRadius, centerY);
            ctx.arc(centerX, centerY, outerRadius, 0, circleKoef);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(centerX + outerRadius, centerY);
            ctx.arc(centerX, centerY, outerRadius, 0, circleKoef);
            // ctx.stroke();
            ctx.moveTo(centerX + bigRadius, centerY);
            ctx.arc(centerX, centerY, bigRadius, 0, circleKoef);
            ctx.stroke();
            ctx.closePath();
        }
        function drawDots() {
            for (var i = 0; i < 60; i++) {
                var radius = void 0;
                if ((i + 1) % 5) {
                    radius = littleRadius;
                }
                else {
                    radius = bigRadius;
                }
                var deg = 6 * (i + 1);
                var xCenter = centerX + dotsRadius * Math.cos(deg * radKoef);
                var yCenter = centerY + dotsRadius * -Math.sin(deg * radKoef);
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(xCenter + radius, yCenter);
                ctx.arc(xCenter, yCenter, radius, 0, circleKoef);
                ctx.stroke();
                ctx.closePath();
            }
        }
        function drawDigits() {
            ctx.font = 'bold 30px sans-serif';
            for (var i = 0; i < 12; i++) {
                var deg = 360 / 12 * (i + 1);
                var radius = dotsRadius - 45;
                var xCenter = centerX + radius * Math.cos(-deg * radKoef + rotate45);
                var yCenter = centerY + radius * -Math.sin(-deg * radKoef + rotate45);
                // if (i > 3) {
                //   yCenter +=10;
                // }
                // if (i > 6 || i === 1) {
                //   xCenter -=20;
                // }
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(xCenter, yCenter);
                if (i < 9) {
                    ctx.strokeText(('' + (i + 1)), xCenter - 5, yCenter + 10);
                }
                else {
                    ctx.strokeText(('' + (i + 1)), xCenter - 15, yCenter + 10);
                }
                ctx.stroke();
                ctx.closePath();
            }
        }
        function drawSecondsArrow(d) {
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            // let d = new Date();
            var sec = d.getSeconds() + 1;
            var deg = 6 * sec;
            var endX = centerX + secLength * Math.cos(deg * radKoef - rotate45);
            var endY = centerY + secLength * Math.sin(deg * radKoef - rotate45);
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.closePath();
        }
        function drawMinutesArrow(d) {
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.lineCap = 'round';
            var sec = d.getSeconds() + 1;
            var min = d.getMinutes();
            var deg = min * 6 + sec * 0.1;
            var endX = centerX + minLength * Math.cos(deg * radKoef - rotate45);
            var endY = centerY + minLength * Math.sin(deg * radKoef - rotate45);
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.closePath();
        }
        function drawHoursArrow(d) {
            ctx.lineWidth = 6;
            ctx.strokeStyle = 'black';
            ctx.lineCap = 'round';
            var sec = d.getSeconds() + 1;
            var min = d.getMinutes();
            var hour = d.getHours();
            var deg = hour * 30 + min * 0.5 + sec * 0.5 / 60;
            var endX = centerX + hourLength * Math.cos(deg * radKoef - rotate45);
            var endY = centerY + hourLength * Math.sin(deg * radKoef - rotate45);
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.closePath();
        }
        function drawClock() {
            drawDial();
            drawDots();
            drawDigits();
            var d = new Date();
            drawHoursArrow(d);
            drawMinutesArrow(d);
            drawSecondsArrow(d);
            setTimeout(drawClock, 1000);
        }
        setTimeout(drawClock, 1000);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('clock'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], ClockComponent.prototype, "clock", void 0);
    ClockComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-clock',
            template: __webpack_require__(679),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], ClockComponent);
    return ClockComponent;
    var _a;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/clock.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = (function () {
    function ContactsComponent(contactsService, groupsService) {
        this.contactsService = contactsService;
        this.groupsService = groupsService;
        this.isCtrlDown = false;
        this.selectedContacts = [];
        this.selectedIds = [];
        this.newContact = {
            firstName: '',
            surname: '',
            age: '',
            group: '',
            description: '',
            note: ''
        };
        this.isCreating = false;
        this.isEditing = false;
    }
    ContactsComponent.prototype.onCtrlDown = function (ev) {
        this.isCtrlDown = ev.ctrlKey;
    };
    ContactsComponent.prototype.onCtrlUp = function (ev) {
        this.isCtrlDown = ev.ctrlKey;
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
        this.getGroups();
    };
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactsService.getContacts()
            .then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactsComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupsService.getGroups()
            .then(function (groups) { return _this.groups = groups; });
    };
    ContactsComponent.prototype.onSelect = function (contact) {
        this.isCreating = false;
        this.isEditing = false;
        if (this.isCtrlDown) {
            if (this.selectedContacts == undefined) {
                this.selectedContacts = [];
            }
            if (!~this.selectedIds.indexOf(contact.id)) {
                this.selectedContacts.push(contact);
                this.selectedIds.push(contact.id);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.selectedContacts, function (elem) { return elem.id === contact.id; });
                __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.selectedIds, function (id) { return id === contact.id; });
            }
        }
        else {
            this.selectedContacts = [];
            this.selectedContacts.push(contact);
            this.selectedIds = [];
            this.selectedIds.push(contact.id);
        }
    };
    ContactsComponent.prototype.isSelected = function (contact) {
        return this.selectedIds ? !!~this.selectedIds.indexOf(contact.id) : false;
    };
    ContactsComponent.prototype.shouldShowEdit = function () {
        if (!this.selectedContacts) {
            return false;
        }
        else {
            return (this.selectedContacts.length === 1) ? true : false;
        }
    };
    ContactsComponent.prototype.shouldShowDelete = function () {
        return this.selectedContacts.length ? true : false;
    };
    ContactsComponent.prototype.shouldShowDetails = function () {
        if (!this.selectedContacts) {
            return false;
        }
        else {
            return (this.selectedContacts.length && !this.isEditing && !this.isCreating) ? true : false;
        }
    };
    ContactsComponent.prototype.addContact = function (contact) {
        var _this = this;
        this.contactsService.createContact(contact)
            .then(function () {
            _this.getContacts();
            _this.isCreating = false;
            _this.newContact = null;
            _this.selectedContacts = [];
        });
    };
    ContactsComponent.prototype.updateContact = function () {
        var _this = this;
        this.contactsService.updateContact(this.editedContact)
            .then(function () {
            _this.getContacts();
            _this.isEditing = false;
            _this.editedContact = null;
        });
    };
    ContactsComponent.prototype.deleteContact = function () {
        var _this = this;
        this.selectedContacts.forEach(function (contact) {
            _this.contactsService.deleteContact(contact.id)
                .then(function () {
                _this.selectedContacts = [];
            });
        });
        this.getContacts();
    };
    ContactsComponent.prototype.startCreating = function () {
        this.isCreating = true;
        this.isEditing = false;
    };
    ContactsComponent.prototype.startEditing = function () {
        this.editedContact = Object.assign({}, this.selectedContacts[0]);
        this.isEditing = true;
        this.isCreating = false;
    };
    ContactsComponent.prototype.cancelCreating = function () {
        this.isCreating = false;
    };
    ContactsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('document:keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ContactsComponent.prototype, "onCtrlDown", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('document:keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ContactsComponent.prototype, "onCtrlUp", null);
    ContactsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__(680),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__groups_service__["a" /* GroupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__groups_service__["a" /* GroupsService */]) === 'function' && _b) || Object])
    ], ContactsComponent);
    return ContactsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/contacts.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__groups_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupsComponent = (function () {
    function GroupsComponent(contactsService, groupsService) {
        this.contactsService = contactsService;
        this.groupsService = groupsService;
        this.isCtrlDown = false;
        this.selectedGroups = [];
        this.selectedIds = [];
        this.isCreating = false;
        this.isEditing = false;
        this.newGroup = {};
        this.editedGroup = {
            id: 0,
            title: ''
        };
    }
    GroupsComponent.prototype.onCtrlDown = function (ev) {
        this.isCtrlDown = ev.ctrlKey;
    };
    GroupsComponent.prototype.onCtrlUp = function (ev) {
        this.isCtrlDown = ev.ctrlKey;
    };
    GroupsComponent.prototype.ngOnInit = function () {
        this.getContacts();
        this.getGroups();
    };
    GroupsComponent.prototype.countMembers = function (group) {
        return this.contacts.filter(function (contact) { return contact.group === group; }).length;
    };
    GroupsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactsService.getContacts()
            .then(function (contacts) { return _this.contacts = contacts; });
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupsService.getGroups()
            .then(function (groups) { return _this.groups = groups; });
    };
    GroupsComponent.prototype.onSelect = function (group) {
        this.isCreating = false;
        this.isEditing = false;
        if (this.isCtrlDown) {
            if (this.selectedGroups == undefined) {
                this.selectedGroups = [];
            }
            if (!~this.selectedIds.indexOf(group.id)) {
                this.selectedGroups.push(group);
                this.selectedIds.push(group.id);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.selectedGroups, function (elem) { return group.id === elem.id; });
                __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.selectedIds, function (id) { return group.id === id; });
            }
        }
        else {
            this.selectedGroups = [];
            this.selectedGroups.push(group);
            this.selectedIds = [];
            this.selectedIds.push(group.id);
        }
    };
    GroupsComponent.prototype.isSelected = function (group) {
        return this.selectedIds ? !!~this.selectedIds.indexOf(group.id) : false;
    };
    GroupsComponent.prototype.shouldShowEdit = function () {
        if (!this.selectedGroups) {
            return false;
        }
        else {
            return (this.selectedGroups.length === 1) ? true : false;
        }
    };
    GroupsComponent.prototype.shouldShowDelete = function () {
        return this.selectedGroups.length ? true : false;
    };
    GroupsComponent.prototype.startCreating = function () {
        this.isCreating = true;
    };
    GroupsComponent.prototype.addGroup = function () {
        var _this = this;
        this.groupsService.createGroup(this.newGroup)
            .then(function () {
            _this.getGroups();
            _this.isCreating = false;
            _this.newGroup = {};
        });
    };
    GroupsComponent.prototype.cancelCreating = function () {
        this.isCreating = false;
    };
    GroupsComponent.prototype.startEditing = function () {
        this.isEditing = true;
        this.editedGroup.id = this.selectedGroups[0].id;
        this.editedGroup.title = this.selectedGroups[0].title;
    };
    GroupsComponent.prototype.updateContacts = function (oldGroupTitle, newGroupTitle) {
        var _this = this;
        this.contacts.forEach(function (contact) {
            if (contact.group === oldGroupTitle) {
                contact.group = newGroupTitle;
                _this.contactsService.updateContact(contact)
                    .then(function () { return contact; });
            }
        });
    };
    GroupsComponent.prototype.updateGroup = function () {
        var _this = this;
        this.groupsService.updateGroup(this.editedGroup)
            .then(function () {
            _this.updateContacts(_this.selectedGroups[0].title, _this.editedGroup.title);
            _this.isEditing = false;
            _this.selectedGroups = [];
            _this.editedGroup = null;
            _this.getGroups();
            _this.getContacts();
        });
    };
    GroupsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
    };
    GroupsComponent.prototype.deleteGroup = function () {
        var _this = this;
        this.selectedGroups.forEach(function (group) {
            _this.groupsService.deleteGroup(group.id)
                .then(function () {
                _this.selectedGroups = [];
            });
        });
        this.getGroups();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('document:keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], GroupsComponent.prototype, "onCtrlDown", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('document:keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], GroupsComponent.prototype, "onCtrlUp", null);
    GroupsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-groups',
            template: __webpack_require__(681),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__groups_service__["a" /* GroupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__groups_service__["a" /* GroupsService */]) === 'function' && _b) || Object])
    ], GroupsComponent);
    return GroupsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/groups.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(515);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/main.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clock_clock_component__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__["a" /* ContactsComponent */]
    },
    {
        path: 'groups',
        component: __WEBPACK_IMPORTED_MODULE_3__groups_groups_component__["a" /* GroupsComponent */]
    },
    {
        path: 'clock',
        component: __WEBPACK_IMPORTED_MODULE_4__clock_clock_component__["a" /* ClockComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/app-routing.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(678),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/app.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__groups_groups_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clock_clock_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__groups_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contacts_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_group_pipe__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__clock_clock_component__["a" /* ClockComponent */],
                __WEBPACK_IMPORTED_MODULE_13__contact_group_pipe__["a" /* ContactGroupPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__contacts_service__["a" /* ContactsService */],
                __WEBPACK_IMPORTED_MODULE_11__groups_service__["a" /* GroupsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/app.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactGroupPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactGroupPipe = (function () {
    function ContactGroupPipe() {
    }
    ContactGroupPipe.prototype.transform = function (contacts, group) {
        return contacts.filter(function (contact) { return contact.group === group.title; });
    };
    ContactGroupPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'contactGroup'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactGroupPipe);
    return ContactGroupPipe;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/contact-group.pipe.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var groups = [
            { id: 0, title: "work" },
            { id: 1, title: "family" },
            { id: 2, title: "customers" },
            { id: 3, title: "friends" }
        ];
        var contacts = [
            { id: 1, firstName: "john", surname: "johnson", age: 45, group: "work", description: "boss", note: "" },
            { id: 2, firstName: "abigail", surname: "smith", age: 32, group: "family", description: "wife", note: "" },
            { id: 3, firstName: "robert", surname: "jones", age: 27, group: "friends", description: "best friend", note: "" },
            { id: 4, firstName: "mary", surname: "brown", age: 36, group: "work", description: "colleague", note: "" },
            { id: 5, firstName: "linda", surname: "davis", age: 63, group: "customers", description: "urgent orders", note: "" },
            { id: 6, firstName: "barbara", surname: "miller", age: 31, group: "friends", description: "classmate", note: "" },
            { id: 7, firstName: "thomas", surname: "wilson", age: 19, group: "customers", description: "regular customer", note: "" },
            { id: 8, firstName: "paul", surname: "moore", age: 46, group: "customers", description: "old customer", note: "" },
            { id: 9, firstName: "mark", surname: "taylor", age: 40, group: "work", description: "sales", note: "" },
            { id: 10, firstName: "karen", surname: "anderson", age: 58, group: "family", description: "sister", note: "" },
            { id: 11, firstName: "george", surname: "thomas", age: 32, group: "friends", description: "drink a lot of beer", note: "" },
            { id: 12, firstName: "james", surname: "smith", age: 15, group: "family", description: "son", note: "" }
        ];
        return { groups: groups, contacts: contacts };
    };
    InMemoryDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/in-memory-data.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/frontend/projects/Angular2/xoresearch-test/src/environment.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ".clock {\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n\r\n.clock-container {\r\n    position: relative;\r\n}"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ".contact-card {\r\n    padding-bottom: .8em;\r\n}\r\n\r\n.contact-card p {\r\n    font-size: 18px;\r\n}\r\n\r\n.contact-card:not(:first-child) {\r\n    padding-top: .3em;\r\n    border-top: 2px solid lightgray;\r\n}\r\n\r\n.col-sm-3 {\r\n    overflow: auto;\r\n}\r\n\r\n.list-group-item {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ".contact {\r\n    padding-left: 1em;\r\n    padding-bottom: 0.5em;\r\n}\r\n\r\n.group-panel {\r\n    cursor: pointer;\r\n    max-width: 70%;\r\n}\r\n\r\n.group-body {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.group {\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n            <ul class=\"nav nav-pills nav-stacked\">\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/contacts\">Contacts</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/groups\">Groups</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/clock\">Clock</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-10 clock-container\">\r\n    <canvas #clock [attr.width]='width' [attr.height]='height' class=\"clock\"></canvas>\r\n</div>"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-7\">\r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" [ngClass]=\"{'active': isSelected(contact)}\" *ngFor=\"let contact of contacts\" (click)=\"onSelect(contact)\">\r\n            <span class=\"name\">{{contact.firstName}} </span><span class=\"name\">{{contact.surname}}</span>\r\n        </li>\r\n    </ul>\r\n    <div class=\"controls\">\r\n        <button class=\"btn btn-success\" (click)=\"startCreating()\">Create</button>\r\n        <button *ngIf=\"shouldShowEdit()\" class=\"btn btn-warning\" (click)=\"startEditing()\">Edit</button>\r\n        <button *ngIf=\"shouldShowDelete()\" class=\"btn btn-danger\" (click)=\"deleteContact()\">Delete</button>\r\n    </div>\r\n</div>\r\n<div class=\"col-sm-3\">\r\n\r\n    <!--Contact Details-->\r\n    <ul class=\"contacts-details\" *ngIf=\"shouldShowDetails()\">\r\n        <li class=\"contact-card\" *ngFor=\"let contact of selectedContacts\">\r\n            <h2 class=\"name\">{{contact.firstName}} {{contact.surname}}</h2>\r\n            <p>\r\n                Age: {{contact.age}}\r\n            </p>\r\n            <p class=\"group\">\r\n                Group: {{contact.group}}\r\n            </p>\r\n            <p>\r\n                Description: {{contact.description}}\r\n            </p>\r\n            <p>\r\n                Note: {{contact.note}}\r\n            </p>\r\n        </li>\r\n    </ul>\r\n\r\n    <!--Contact Create Form-->\r\n    <form *ngIf=\"isCreating\" class=\"form-horizontal\" (ngSubmit)=\"addContact(newContact)\">\r\n        <div class=\"form-group\">\r\n            <label for=\"firstanme\">First Name:</label>\r\n            <input class=\"form-control\" name=\"firstanme\" [(ngModel)]=\"newContact.firstName\" type=\"text\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"surname\">Surname:</label>\r\n            <input class=\"form-control\" name=\"surname\" [(ngModel)]=\"newContact.surname\" type=\"text\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"age\">Age:</label>\r\n            <input class=\"form-control\" name=\"age\" [(ngModel)]=\"newContact.age\" type=\"text\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"group\">Group:</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"newContact.group\" name=\"group\">\r\n                <option *ngFor=\"let group of groups\" value=\"{{group.title}}\">{{group.title}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description:</label>\r\n            <textarea class=\"form-control\" rows=\"5\" cols=\"20\" [(ngModel)]=\"newContact.description\" name=\"description\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"note\">Note:</label>\r\n            <textarea class=\"form-control\" rows=\"5\" cols=\"20\" [(ngModel)]=\"newContact.note\" name=\"note\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-default\">Add</button>\r\n            <button (click)=\"cancelCreating()\" class=\"btn btn-info\">Cancel</button>\r\n        </div>\r\n    </form>\r\n\r\n    <!--Contact Edit Form-->\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"updateContact()\" *ngIf=\"isEditing\">\r\n        <div class=\"form-group\">\r\n            <label for=\"firstanme\">First Name:</label>\r\n            <input class=\"form-control\" name=\"firstanme\" [(ngModel)]=\"editedContact.firstName\" type=\"text\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"surname\">Surname:</label>\r\n            <input class=\"form-control\" name=\"surname\" [(ngModel)]=\"editedContact.surname\" type=\"text\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"age\">Age:</label>\r\n            <input class=\"form-control\" name=\"age\" [(ngModel)]=\"editedContact.age\" type=\"text\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"group\">Group:</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"editedContact.group\" name=\"group\">\r\n          <option *ngFor=\"let group of groups\" value=\"{{group.title}}\">{{group.title}}</option>\r\n        </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description:</label>\r\n            <textarea class=\"form-control\" rows=\"5\" cols=\"20\" [(ngModel)]=\"editedContact.description\" name=\"description\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"note\">Note:</label>\r\n            <textarea class=\"form-control\" rows=\"5\" cols=\"20\" [(ngModel)]=\"editedContact.note\" name=\"note\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-default\">Update</button>\r\n            <button (click)=\"cancelEditing()\" class=\"btn btn-info\">Cancel</button>\r\n        </div>\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-10\">\r\n    <ul>\r\n        <li *ngFor=\"let group of groups\" class=\"panel panel-default group-panel\" (click)=\"onSelect(group)\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"group-body\">\r\n                    <span class=\"group\">{{group.title}} </span>\r\n                    <span class=\"badge\">{{countMembers(group.title)}}</span>\r\n                </div>\r\n            </div>\r\n            <ul *ngIf=\"isSelected(group)\">\r\n                <li class=\"contact\" *ngFor=\"let contact of (contacts | contactGroup: group)\">\r\n                    <span class=\"name\">{{contact.firstName}} </span><span class=\"name\">{{contact.surname}}</span>\r\n                </li>\r\n                <p *ngIf=\"(contacts | contactGroup: group).length === 0\">No contacts in this group</p>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n    <div class=\"controls\" *ngIf=\"(!isCreating && !isEditing)\">\r\n        <button class=\"btn btn-success\" (click)=\"startCreating()\">Create</button>\r\n        <button *ngIf=\"shouldShowEdit()\" class=\"btn btn-warning\" (click)=\"startEditing()\">Edit</button>\r\n        <button *ngIf=\"shouldShowDelete()\" class=\"btn btn-danger\" (click)=\"deleteGroup()\">Delete</button>\r\n    </div>\r\n\r\n    <form (ngSubmit)=\"addGroup()\" name=\"creating\" class=\"creating form-inline\" *ngIf=\"isCreating\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newGroup.title\" [ngModelOptions]=\"{standalone: true}\">\r\n        <button class=\"btn btn-default\">Add</button>\r\n        <button class=\"btn btn-info\" (click)=\"cancelCreating()\">Cancel</button>\r\n    </form>\r\n\r\n    <form (ngSubmit)=\"updateGroup()\" name=\"editing\" class=\"editing form-inline\" *ngIf=\"isEditing\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editedGroup.title\" [ngModelOptions]=\"{standalone: true}\">\r\n        <button class=\"btn btn-default\">Update</button>\r\n        <button class=\"btn btn-info\" (click)=\"cancelEditing()\">Cancel</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ })

},[706]);
//# sourceMappingURL=main.bundle.map