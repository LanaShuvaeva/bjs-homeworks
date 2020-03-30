"use strict"

// Task #1

function getSolutions(a, b, c) {
    const d = b ** 2 - 4 * a * c;
    let x1, x2;
    let roots = [];
    if (d === 0) {
        x1 = -1 * b / (2 * a);
        roots.push(x1);
    } else if (d > 0) {
        x1 = ((-1 * b + Math.sqrt(d)) / (2 * a));
        x2 = ((-1 * b - Math.sqrt(d)) / (2 * a));
        roots.push(x1, x2);
    }
    return {
        D: d,
        roots
    };
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${Object.values(result)[0]}`);
        if (!Object.values(result)[1][0]) {
        console.log("Уравнение не имеет вещественных корней");
        } else if (Object.values(result)[1].length > 1) {
            console.log(`Уравнение имеет один корень X₁ = ${Object.values(result)[1][0]}, X₂ = ${Object.values(result)[1][1]}`);
        } else {
            console.log(`Уравнение имеет один корень X₁ = ${Object.values(result)[1][0]}`);
        }
    return result;
}

// console.log(getSolutions(1, 2, 3));
// showSolutionsMessage(1, 2, 3);

// console.log(getSolutions(7, 20, -3));
// showSolutionsMessage(7, 20, -3);

// console.log(getSolutions(2, 4, 2));
// showSolutionsMessage(2, 4, 2);


// Task #2
let avScore = new Object();

function getAverageScore(data) {
    for (let val in data) {
        let avg = (data[val].reduce((previous, current) => current += previous)) / data[val].length;
        avScore[val] = avg;
    }      

    function getAverageMark(marks) {
            let avg = (marks.reduce((previous, current) => current += previous)) / marks.length;
            avScore.average = avg;
    }; 

    getAverageMark(Object.values(avScore));

    return avScore;
}

// console.log(getAverageScore({
//     algebra: [2, 4, 5, 2, 3, 4],
//     geometry: [2, 4, 5],
//     russian: [3, 3, 4, 5],
//     physics: [5, 5],
//     music: [2, 2, 6],
//     english: [4, 4, 3],
//     poetry: [5, 3, 4],
//     chemistry: [2],
//     french: [4, 4]
// }));


// Task #3

let pirate = new Object();

function getPersonData(secretData) {
    pirate.firstName;
    pirate.lastName;
        for (let i = 0; i < Object.values(secretData).length; i++){
        if (Object.values(secretData)[0] === 0) {
            pirate.firstName = "Родриго";
        } else if (Object.values(secretData)[0] === 1) {
            pirate.firstName = "Эмильо";
        }
        if (Object.values(secretData)[1] === 0) {
            pirate.lastName = "Родриго";
        } else if (Object.values(secretData)[1] === 1) {
            pirate.lastName = "Эмильо";
        }
    }    
    return pirate;
}



console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));



