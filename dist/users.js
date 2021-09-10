"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersList = void 0;
class User {
    constructor(name) {
        this._name = name;
        this._id = Math.random();
        this._role = "user";
    }
    get name() {
        return this._name;
    }
    get role() {
        return this._role;
    }
}
class Athetec extends User {
    constructor(name) {
        super(name);
        this._role = "athetec";
    }
}
const bryan = new Athetec("bryan");
const sebastian = new Athetec("sebastian");
exports.usersList = [bryan, sebastian];
