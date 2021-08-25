import {Character} from "./character";


export class Warrior extends Character {

    public constructor(name: string, sex: string, life: number) {
        life = life + 30;
        super(name, sex, life);

    }

    // attack(): any {
    //     super.attack();
    // }


}