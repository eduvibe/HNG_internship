function updateTime() {
    const utcTimeElement = document.getElementById('utcTime');
    const currentDayElement = document.getElementById('currentDay');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = dayOfWeek;
}

updateTime();
setInterval(updateTime, 1000);
