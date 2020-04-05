// Task #1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
       this.durability - damage > 0 ? this.durability -= damage : this.durability = 0;    
    }

    getDamage() {
        // if (this.durability >= durability * 0.3) {

        // }

        return console.log(this.durability, durability);
    }

}

const sword = new Weapon('Старый меч', 20, 10, 1);
const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
  
  


sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

arm.takeDamage(20);
console.log(arm.durability); // Infinity


bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0



console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(bow.getDamage()); // 1