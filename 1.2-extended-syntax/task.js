"use strict"

function getResult(a,b,c) {    
    const d = b ** 2 - 4 * a * c;   
     
    let arr = [];    
    let x;    
    let y;

      if (d > 0) {        
        x = (-b + Math.sqrt(d)) / 2 * a;        
        y = (-b - Math.sqrt(d)) / 2 * a;
        arr.push(x, y);    
      } else if (d === 0) {        
          x = (-b) / 2 * a;        
          arr.push(x);    
      }  

        return arr;
}

function getAverageMark(marks) {
    let averageMark = 0;
    let sumMarks = 0;

    if (!marks.length) {
        console.log("0 marks");
    } else {
        console.log("More than 5 marks");
        let newMarks = marks.slice(0, 5);
        for (let mark of newMarks) {
            sumMarks += mark;
            console.log(newMarks.length);
        }
        averageMark = sumMarks / newMarks.length;
      }

    return averageMark;
}

function askDrink(name,dateOfBirthday) {
    if(new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
        return`Не желаете ли олд-фэшн, ${name}?`
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
}