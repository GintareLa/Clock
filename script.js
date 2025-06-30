const dateEl = document.getElementsByClassName('date')[0];
const timeEl = document.getElementsByClassName('time')[0];

function clock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = addZero(hours);
    minutes = addZero (minutes);
    seconds = addZero (seconds);

    timeEl.textContent = hours + ':' + minutes + ':' + seconds;
    setTimeout(clock, 100)
 }

 function addZero(t) {
    if( t < 10) {
        t = '0' + t;
    }
    return t;
 }

 clock();