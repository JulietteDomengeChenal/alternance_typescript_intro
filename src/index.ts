const { Select } = require('enquirer');
const prompts = require('prompts');
const inquirer = require('inquirer');
const fetch = require("node-fetch");

//--------------------------IMPORT CLASS--------------------------------//
import {Weapon} from './class/weapon';
import {Character} from './class/character';
import {Enemy} from './class/enemy';
import {Warrior} from "./class/warrior";
import {Wizard} from "./class/wizard";



const questionCharacterOne = [
    {
        type: 'text',
        name: 'name',
        message: 'What\'s your character\'s name?',
    },
    {
        type: 'text',
        name: 'sex',
        message: 'Is it a man or a woman?'
    },
    {
        type: 'number',
        name: 'kind',
        message: 'Is it a wizard (1) or a warrior(2)?',
        choices: [
            { title: 'Wizard', value: 1 },
            { title: 'Warrior', value: 2 },
        ],
    }
];

const questionFight = [
    {
        type: 'confirm',
        name: 'action',
        message: "Do you want to fight?",
        initial: true
    }
];

const questionWeapon = [
    {
        type: 'select',
        name: 'weapon',
        message: 'Which weapon do you want ?' ,
        choices: [
            { title: 'Sword', value: 'Sword' },
            { title: 'Ark', value: 'Ark' },
            { title: 'Fire', value: 'Fire' },
            { title: 'Thunderbolt', value: 'Thunderbolt'},
        ],
    }];

(async () => {

    //---------------------------------------CREATE HERO---------------------------------------------------//
    const responseCharacterOne = await prompts(questionCharacterOne);
    let characterOne : Character;
    if(responseCharacterOne.kind === 1){
        characterOne = new Wizard(responseCharacterOne.name, responseCharacterOne.sex, 100);
    } else {
        characterOne = new Warrior(responseCharacterOne.name, responseCharacterOne.sex, 100);
    }
    console.log("|------------------------------------------------|");
    characterOne.summary();
    console.log("|----v-------------------------------------------|");

    //--------------------------------------CREATE WEAPON--------------------------------------------------//
    const responseWeapon = await prompts(questionWeapon);
    console.log(responseWeapon.weapon);
    let weaponOne = new Weapon();
    weaponOne.name = responseWeapon.weapon;
    if(responseWeapon.weapon === "Sword" || responseWeapon.weapon === "Ark" ){
       weaponOne.damage = 15;
    } else if(responseWeapon.weapon === "Fire" || responseWeapon.weapon === "Thunderbolt"){
       weaponOne.damage = 25;
    }
    characterOne.weapon = weaponOne;

    console.log("|------------------------------------------------|");
    weaponOne.summary();

    let gamePlay: boolean = true;
    do {  //-----------------------------------BOUCLE WHILE------------------------------------------------//
        let enemyOne = new Enemy("Goblin", 50 );

        console.log("|------------------------------------------------|");
        enemyOne.summary();
        console.log("|----v-------------------------------------------|");

        const responseFight = await prompts(questionFight);
        console.log(responseFight);

        if (responseFight.action === true) {
            console.log(">> Let's fight !!");

            let damageChar = characterOne.attack();
            enemyOne.takeDamage(damageChar);
            console.log("Your character deals " + damageChar + " damages to the enemy." +
            "\n                    ---");

            if (enemyOne.life <= 0) {
                console.log(characterOne.name + " kills the enemy.");
            } else {
                console.log( enemyOne.name + " is still " + enemyOne.life + " life and ripostes.");
                let damageEn = enemyOne.attack();
                characterOne.takeDamage(damageEn);
                console.log("The enemy deals " + damageEn + " damages to your character.");

                if (characterOne.life <= 0) {
                    gamePlay = false;
                } else {
                    console.log(characterOne.name + " has " + characterOne.life + " life now.");
                }
            }

            //----------------------------------------API-----------------------------------------------//
            let citation = await fetch('https://kaamelott.hotentic.com/api/random/personnage/Le%20Roi%20Burgonde')
                .then((response: { json: () => any; }) => response.json())
                .then((data: any) => data)
                .catch(function(error:Error) {
                    console.log(error);
                });
            console.log(citation.citation.citation);


        } else if(responseFight.action === false){
            gamePlay = false;
        }
        if (characterOne.life <= 0) {
            gamePlay = false;
        }
    } while (gamePlay);

    console.log("GAME OVER !!")

})();





