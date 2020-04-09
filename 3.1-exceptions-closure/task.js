"use strict"

// Task #1

function parseCount(count) {
    const parsed = Number.parseInt(count);
    if (Number.isNaN(parsed)) {
        throw  new Error("Невалидное значение");   
    } 
        return parsed;
}

function validateCount (count) {
    try {
        return parseCount(count);
    } catch (e) {  
        return e;
    } 
}


// Task #2

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || b + c < a || c + a < b) {
            throw  new Error("Треугольник с такими сторонами не существует");
        };
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    };

    getArea() {
        const p = this.getPerimeter() / 2;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

const showError = {
    getArea() {
        return  "Ошибка! Неправильный треугольник";
    },

    getPerimeter() {
        return "Ошибка! Неправильный треугольник";
    }
    
}

function getTriangle (a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (e) {  
      return showError;
    } 
}