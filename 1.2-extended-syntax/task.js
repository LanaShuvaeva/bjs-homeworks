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
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}