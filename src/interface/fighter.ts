
export interface Fighter {

    name: string;
    life: number;

    summary(): any;
    attack(): any;
    takeDamage(damage: number): any;

}