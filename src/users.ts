class User {
  private _id: number;
  private _name: string;
  protected _role: string;

  constructor(name:string) {

    this._name = name;
    this._id = Math.random();
    this._role = "user";
  }

  public get name(): string {
    return this._name;
  }
  
  public get role() : string {
    return this._role;
  }
  
}

class Athetec extends User {
  constructor(name:string) {
    super(name);
    this._role = "athetec";
  }
}
const bryan = new Athetec("bryan");
const sebastian = new Athetec("sebastian");
export const usersList = [bryan, sebastian];
