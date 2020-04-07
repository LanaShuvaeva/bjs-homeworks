"use strict"

// Task #1
class Weapon {
    constructor(obj) {
        this.name = obj.name;
        this.attack = obj.attack;
        this.durabilityStart = obj.durability;
        this.durability = obj.durability;
        this.range = obj.range;
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

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});


const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const oldSword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: bow.durability,
    range: 4,
});

const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: sword.range,
});

const stormStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: staff.durability,
    range: 3,
});

// Task #2
class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        });
    }
}

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        });
    }
}

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Меч',
            attack: 25,
            durability: 500,
            range: 1,
        });
    }
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });
    }
}

class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        });
    }
}

class LongBow extends Bow {
    constructor() {
        super();
            this.name = 'Длинный лук';
            this.attack = 15;
            this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
            this.name = 'Секира';
            this.attack = 27;
            this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
            this.name = 'Посох Бури';
            this.attack = 10;
            this.range = 3;
    }
}

const stormy = new StormStaff();
console.log(stormy);


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

// console.log(log.getTotalAverage()); // 3,75
// console.log(log);
