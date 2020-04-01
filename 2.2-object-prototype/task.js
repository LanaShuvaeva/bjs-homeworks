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
    const arr = birthday.split("-").map((num) => parseInt(num));
    this.birthday = Math.round(new Date(Date.UTC(arr[0], arr[1]-1, arr[2])).getTime());
    
    const diff = now - this.birthday;

    const age = Math.floor((diff/86400000) / 365.25);
    console.log(age);

    if (age >= 18) {
        return true;
    } 
        return false;
}
