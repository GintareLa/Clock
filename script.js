const dateEl = document.getElementsByClassName('date')[0];
const timeEl = document.getElementsByClassName('time')[0];
const hourEl = document.getElementsByClassName('hours')[0];
const minsEl = document.getElementsByClassName('minutes')[0];
const secsEl = document.getElementsByClassName('seconds')[0];

const weekdays = [
    'Sekmadienis',
    'Pirmadienis',
    'Antradienis',
    'Trečiadienis',
    'Ketvirtadienis',
    'Penktadienis',
    'Šeštadienis'
]

const months = [
    'Sausio',
    'Vasario',
    'Kovo',
    'Balandžio',
    'Gegužės',
    'Birželio', 
    'Liepos',
    'Rugpjūčio',
    'Rugsėjo', 
    'Spalio',
    'Lapkričio',
    'Gruodžio',
]

function clock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = addZero(hours);
    minutes = addZero (minutes);
    seconds = addZero (seconds);
    const month = now.getMonth();
    const weekday = now.getDay();
    const day = now.getDate();

    timeEl.textContent = hours + ':' + minutes + ':' + seconds;
    dateEl.textContent = weekdays[weekday] + ', ' + months[month] + ' ' + day + ' d. ';

    hourEl.style.transform = "rotate(" + hours * 30 + "deg)";
    minsEl.style.transform = "rotate(" + minutes * 6 + "deg)";
    secsEl.style.transform = "rotate(" + seconds * 6 + "deg)";
    setTimeout(clock, 100);
 }

 function addZero(t) {
    if( t < 10) {
        t = '0' + t;
    }
    return t;
 }

 clock();