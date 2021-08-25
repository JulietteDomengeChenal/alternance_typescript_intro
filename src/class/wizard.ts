import {Character} from "./character";


export class Wizard extends Character {

    public constructor(name: string, sex: string, life: number) {
        super(name, sex, life);
    }

    // attack(): any {
    //     let bonus:number = 15;
    //     return super.attack() + bonus;
    // }

}