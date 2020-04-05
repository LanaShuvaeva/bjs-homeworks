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
        super (durability);
        
        this.name = name;
        this.version = version;
        this.attack = attack;
        this.range = range;
        this.durability = durability;
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

// console.log(longBow.takeDamage(200));
// console.log(longBow.getDamage());
console.log(longBow);
console.log(poleAxe);
console.log(superStick);


// sword.takeDamage(5);
// console.log(sword.durability); // 5

// sword.takeDamage(50);
// console.log(sword.durability); // 0

// arm.takeDamage(20);
// console.log(arm.durability); // Infinity


// bow.takeDamage(20);
// console.log(bow.durability); // 180

// bow.takeDamage(200);
// console.log(bow.durability); // 0



// console.log(bow.durability); // 0
// console.log(bow.getDamage()); // 0

// console.log(arm.durability); // Infinity
// console.log(bow.getDamage()); // 1


// console.log(bow.durability); // 0
// console.log(bow.isBroken()); // true

// console.log(arm.durability); // Infinity
// console.log(bow.isBroken()); // false






// Task #3

