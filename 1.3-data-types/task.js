"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    // const loan = Number(amount) - Number(contribution);
    for (let i = 0; i < arguments.length; i++) {
        if(isNaN(arguments[i])) {
            alert(`One of the parameters is not a number. Please try again.`);
        } else {
            const loan = amount - contribution;
            const today = new Date();

            // Calculating months
            let diff = (date.getTime() - today.getTime()) / 1000;
            diff /= (60 * 60 * 24 * 7 * 4);
            const months = Math.abs(Math.round(diff));

            // Calculating monthly payments
            const payment = loan * ((1/12 * percent / 100) + (1/12 * percent / 100) / (((1 + (1/12 * percent / 100)) ** months) - 1));
            
            const totalAmount = (payment * months).toFixed(2);

            console.log(loan);
            console.log(months);
            console.log(payment);
            console.log(totalAmount);

            return Number(totalAmount);
}
        }

    }  

function getGreeting(name) {
    let greeting;
    if (name !== null && name !== undefined && name !== "") {
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним`;
    }
    return greeting;
}