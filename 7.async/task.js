class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {             
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.some((element) => element.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }        
        let arg = {
            time: time,
            callback: callback,
            canCall: true
        }
        this.alarmCollection.push(arg);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(element => element.time != time);
    }

    getCurrentFormattedTime() {        
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          })
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => { 
                if((item.time === this.getCurrentFormattedTime()) && (item.canCall === true)) {
                    item.canCall = false;
                    item.callback();
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        if(this.intervalId) {
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}