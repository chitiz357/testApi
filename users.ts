class User {
  private _id: number;
  private _name: string;
  protected _role: string;
  constructor(name) {
    this._name = name;
    this._id = Math.random();
    this._role = "user";
  }
}

class Athetec extends User{
    constructor(name) {
        super(name);
        this._role='athetec'
    }
}
const bryan = new Athetec('bryan')

export const usersList = [
bryan
];

