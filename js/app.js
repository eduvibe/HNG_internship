const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('menu-active');
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    links.classList.toggle('menu-active');
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
});

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
