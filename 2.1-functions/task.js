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


function getSolutions(a, b, c) {
    const d = b ** 2 - 4 * a * c;
    let x1, x2;
    if (d < 0) {
        return `{ D: ${d}, roots: []}`;
    } else if (d === 0) {
        x1 = -1 * b / (2 * a);
        return `{ D: ${d}, roots: [${x1}]}`;
    } else {
        x1 = ((-1 * b + Math.sqrt(d)) / (2 * a));
        x2 = ((-1 * b - Math.sqrt(d)) / (2 * a));
        return `{ D: ${d}, roots: [x1: ${x1}, x2 ${x2}]}`;
    }
    return {
        D: d,
        roots: x1, x2;
    }
}