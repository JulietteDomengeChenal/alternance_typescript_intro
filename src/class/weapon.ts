
export class Weapon{

    public _name: string;
    public _damage: number;

    constructor() {
        this._name = this.name;
        this._damage = this.damage;

    }
    // constructor (name: string, damage: number) {
    //     this._name = name;
    //     this._damage = damage;
    // }


    public set name(name) {
        this._name = name;
    }
    public set damage(damage) {
        this._damage = damage;
    }

    get name() {
        return this._name;
    }
    get damage() {
        return this._damage;
    }

    //---------------------------METHODS-------------------------------//
    summary(){
        let presentation = " You get a " + this.name + " dealing " + this.damage + " damages";
        console.log(presentation);
    }


}