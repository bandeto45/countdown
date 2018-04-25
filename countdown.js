function initializeClock(en, st) {
    console.log("initializeClock");
    /*Each tags element has an ID "days", "hours", "minutes" and "seconds"*/
    /*Set all selected elements into respective variables*/
    var daysSpan = document.getElementById("days");
    var hoursSpan = document.getElementById("hours");
    var minutesSpan = document.getElementById("minutes");
    var secondsSpan = document.getElementById("seconds");

function updateClock(d, e) {
        /*calculating the time left*/
        var t = parseInt(e) - parseInt(d);
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        /*Display the calculated time left before the end of time*/
        daysSpan.innerHTML = days;
        hoursSpan.innerHTML =('0' + hours).slice(-2);
        minutesSpan.innerHTML = ('0' + minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + seconds).slice(-2);
        
        /*When the time is 0 or less the display will be 0 and the timeinterval will also clear.*/
        if (t <= 0) {
        
        daysSpan.innerHTML = '00';
        hoursSpan.innerHTML = '00';
        minutesSpan.innerHTML = '00';
        secondsSpan.innerHTML = '00';
            clearInterval(timeinterval);
        }
    }
    /* Set st and en into timestamp */
    st = Date.parse(st);
    en = Date.parse(en);
    updateClock(st, en);
    timeinterval = setInterval(function () {
        updateClock(st, en);
        en = en - 1000;
    }, 1000);

}
