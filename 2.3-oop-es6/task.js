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
        this.subjects = new Object();
    }

    getName() {
       return this.name;
    }

    addGrade(grade, subject) {
        this.subjects[subject] === undefined ? this.subjects[subject] = [] : 0;
        if (grade < 1 || grade > 5 || !Number.isInteger(grade)) {
            console.log(`Вы пытались поставить оценку ${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
            return 0;
        }
        this.subjects[subject].push(grade);

        return this.subjects[subject].length;
    }  

    getAverageBySubject(subject) {
        let sum = 0;
        if (this.subjects[subject] === undefined) {
            return 0;
        }
        for (let mark of this.subjects[subject]) {
            sum += mark;
        }
        return sum / this.subjects[subject].length;
    }

    getTotalAverage() {
        let sum = 0;
        for (let subject in this.subjects) {
            let subjectAverage = this.getAverageBySubject(subject);
            sum += subjectAverage;
        }
        return sum / Object.keys(this.subjects).length;
    }
}


const log = new StudentLog('Олег Никифоров');


log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75


console.log(log);
