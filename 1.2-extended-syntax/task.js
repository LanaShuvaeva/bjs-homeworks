"use strict"

function getResult(a,b,c) {    
    const d = b ** 2 - 4 * a * c;   
     
    let arr = [];    
    let x;    
    let y;

      if (d > 0) {        
        x = (-b + d) / 2 * a;        
        y = (-b - d) / 2 * a;
        arr.push(x, y);    
      } else if (d === 0) {        
          x = (-b + d) / 2 * a;        
          arr.push(x);    
      }  else {        
          console.log("")    
      }

        return arr;
}

function getAverageMark(marks){
    let averageMark = 0;
    let sumMarks = 0;

    if (!marks.length) {
        console.log("0 marks");
    } else {
        console.log("More than 5 marks");
        let newMarks = marks.slice(0, 5);

        for (let i in newMarks) {
            if (i) {
            sumMarks += newMarks[i];
            averageMark = sumMarks / newMarks.length;
            console.log(newMarks.length);
            }
        }
      }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}