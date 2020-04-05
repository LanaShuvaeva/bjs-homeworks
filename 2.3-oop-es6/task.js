"use strict"

// Task #1 & 2
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durabilityStart = durability;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
       this.durability - damage > 0 ? this.durability -= damage : this.durability = 0;    
    }

    getDamage() {
        return this.durability >= this.durabilityStart * 0.3 ? this.attack
               : this.durability === 0 ? this.attack = 0
               : this.attack /= 2;
    }

    isBroken() {
        return this.durability > 0 ? false : true;
    }

}

class ImprovedWeapon extends Weapon {
    constructor(name, version, attack, durability, range) {
        super (name, attack, durability, range);
        this.version = version;
    }
}


const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);

const longBow = new ImprovedWeapon('Длинный лук', 'Лук', 15, bow.durability, 4);
const poleAxe = new ImprovedWeapon('Секира', 'Меч', 27, 800, sword.range);
const superStick = new ImprovedWeapon('Посох Бури', 'Посох', 10, stick.durability, 3);



// Task #3

class StudentLog {
    constructor (name) {
        this.name = name;
    }

    getName() {
       return this.name;
    }

    addGrade(grade, subject) {
        this.subject.push(grade);
       console.log();

        // this.geometry = [];

        if (grade >= 1 && grade <= 5) {
            // this.subject.push(grade);
            // console.log(this.algebra);
        } else {
            console.log(`Вы пытались поставить оценку ${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
        }

        return this.algebra;
    }
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName());
log.addGrade(2, 'algebra');
log.addGrade(5, 'algebra');
console.log(log);