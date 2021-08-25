import {Fighter} from "../interface/fighter";

export class Enemy implements Fighter{

    private _name: string;
    private _life: number;

    public constructor(name: string, life: number ) {
        this._name = name;
        this._life = life;
    }

    public set name(name) {
        this._name = name;
    }
    public set life(life) {
        this._life = life;
    }

    get name() {
        return this._name;
    }
    get life() {
        return this._life;
    }


    //---------------------------METHODS-------------------------------//
    summary(){
        let presentation = " " + this.name + " found, with " + this.life + " life";
        console.log(presentation);
    }

    attack(){
        return  Math.floor(Math.random() * 50) + 1;
    }

    takeDamage(damage: number){
        this._life = (this.life - damage);
    }

}