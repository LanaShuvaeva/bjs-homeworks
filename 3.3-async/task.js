"use stict"

class AlarmClock {
    constructon() {
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(id, time, callback) {
        // if(!id) return console.error("Error! You need to provide valid ID");
        if (!id) throw new Error("Error!!! You need to provide valid ID");
        if (this.alarmCollection.some(obj => obj.id === this.id)){
            throw new Error("Error!!! alarm with this ID already exist");
        } 
        this.alarmCollection.push({
            id,
            time,
            callback
        });
    }

    removeClock(id){
        const delMeIndex = this.alarmCollection.findIndex(obj => {
            obj.id === id;
        });
        if (delMe >= 0) {
            this.alarmCollection.splice(delMeIndex, 1);
        }
        return delMe >= 0;
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return date.toLocaleTimeString([], {
          hour12: false,  
          hour: '2-digit',
          minute:'2-digit'
        });
    }
}

