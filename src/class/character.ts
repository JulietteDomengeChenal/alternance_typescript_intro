import {Fighter} from "../interface/fighter";
import {Weapon} from './weapon';

export abstract class Character implements Fighter {


    private _name: string;
    private _sex: string;
    private _life: number;
    private _weapon: Weapon;

    protected constructor(name: string, sex: string, life: number) {
        this._weapon = this.weapon;
        this._name = name;
        this._sex = sex;
        this._life = life;
    }

    public set name(name) {
        this._name = name;
    }
    public set sex(sex) {
        this._sex = sex;
    }
    public set life(life) {
        this._life = life;
    }
    public set weapon(weapon) {
        this._weapon = weapon;
    }

    get name() {
        return this._name;
    }
    get sex() {
        return this._sex;
    }
    get life() {
        return this._life;
    }
    get weapon() {
        return this._weapon;
    }


    //---------------------------METHODS-------------------------------//
    summary(){
        let presentation = " Hello I'm " + this.name + " a " + this.sex + " " + this.constructor.name +
            ", with " + this.life + " life";
        console.log(presentation);
    }

    attack(){
        let bonus: number = this.weapon.damage;
        return Math.floor(Math.random() * 100) + 1 + bonus;
    }

    takeDamage(damage: number){
        this._life = (this.life - (damage));
    }


}
