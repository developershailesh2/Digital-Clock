function updatteClock(){

    const now_time = new Date()
    let hours = now_time.getHours().toString().padStart(2,0);
    const am_pm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now_time.getMinutes().toString().padStart(2,0);
    const seconds = now_time.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${am_pm}`;
    document.getElementById('clock').textContent = timeString;
}

updatteClock();
setInterval(updatteClock,1000);