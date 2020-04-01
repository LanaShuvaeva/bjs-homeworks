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
    // код для задачи №3 писать здесь
    // return verdict
}