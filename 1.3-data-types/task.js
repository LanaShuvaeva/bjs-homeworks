"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
        if (isNaN(percent)) {
            return "Не правильное значение percent"
        }
        if (isNaN(contribution)) {
            return "Не правильное значение contribution"
        }
        if (isNaN(amount)) {
            return "Не правильное значение amount"
        }

            const loan = amount - contribution;
            const today = new Date();

            // Calculating months
            let diff = ((date.getTime() - today.getTime()) / 1000) /  (60 * 60 * 24 * 7 * 4);
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

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}