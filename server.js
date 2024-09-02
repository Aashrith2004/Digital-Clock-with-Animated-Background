const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    min.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    sec.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
}, 1000);
