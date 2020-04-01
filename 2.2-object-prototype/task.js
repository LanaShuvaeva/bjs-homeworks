// "use strict"

function getAnimalSound(animal) {
    this.sound = animal.sound;
    if (animal === undefined) {
        return null;
    } 
    return sound;
}

function getAverageMark(marks) {
    const average = (marks.map((num) => parseInt(num)).reduce((a, b) => a + b)) / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    const now = Date.now();
    new Date();
    // this.birthday = Math.round(birthday.getTime()/1000);
    const arr = birthday.split("-").map((num) => parseInt(num));
    const year = arr[0];
    const month = arr[1];
    const day = arr[2];
    this.birthday = new Date(Date.UTC(year, month-1, day));
    const diff = now - birthday;

    console.log(birthday);
    console.log(now);
    console.log(Math.round(this.birthday.getTime()));
    this.birthday;
    // return verdict
}