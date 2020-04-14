"use stict"

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time, callback, id) {
        if (!id) throw new Error("Error!!! You need to provide valid ID");
        if (this.alarmCollection.some(obj => obj.id === id)){
            throw new Error("Error!!! alarm with this ID already exist");
        } 
        this.alarmCollection.push({id, time, callback});
        return this.alarmCollection;
    }

    removeClock(id){
        const delMeIndex = this.alarmCollection.findIndex(obj => obj.id === id);
        delMeIndex >= 0 ? this.alarmCollection.splice(delMeIndex, 1) : false;
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return date.toLocaleTimeString([], {
          hour12: false,  
          hour: '2-digit',
          minute:'2-digit'
        });
    }

    start() {
        function checkClock(obj) {
            if (obj.time === this.getCurrentFormattedTime()) {
                callback();
            }
        }
        
        if (!this.timerId) {
            setInterval(function(){
                this.alarmCollection.forEach(function (obj) {
                    this.timerId = checkClock(obj);
                });
            }, 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval();
            this.timerId = 0;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(obj => console.log(`ID = ${obj.id}; Time = ${obj.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("21:00", () => console.log("Time to call it a night"), 1);
    phoneAlarm.addClock("22:00", () => console.log("Time to call it a night"), 2);

 
    console.log(phoneAlarm.alarmCollection);
    phoneAlarm.printAlarms();
    phoneAlarm.removeClock(2);
    console.log(phoneAlarm.alarmCollection);
    // phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime())
}

testCase();

function getCurrentFormattedTime() {
    const date = new Date();
    return date.toLocaleTimeString([], {
      hour12: false,  
      hour: '2-digit',
      minute:'2-digit'
    });
}

console.log(getCurrentFormattedTime());