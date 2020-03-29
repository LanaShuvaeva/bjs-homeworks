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
    let result = getSolutions(a, b, c);
    return result;
}


// showSolutionsMessage(1, 2, 3);
console.log(getSolutions(2, 4, 2));
console.log(showSolutionsMessage());

// Task #2


// function getSolutions(a, b, c) {
//     const d = b ** 2 - 4 * a * c;
//     let x1, x2;
//     if (d < 0) {
//         return `{ D: ${d}, roots: []}`;
//     } else if (d === 0) {
//         x1 = -1 * b / (2 * a);
//         return `{ D: ${d}, roots: [${x1}]}`;
//     } else {
//         x1 = ((-1 * b + Math.sqrt(d)) / (2 * a));
//         x2 = ((-1 * b - Math.sqrt(d)) / (2 * a));
//         return `{ D: ${d}, roots: [x1: ${x1}, x2 ${x2}]}`;
//     }
//     return {
//         D: d,
//         roots: x1, x2;
//     }
// }