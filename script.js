// KAR YAĞIŞI FONKSİYONU
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 2 + 2; // Hızlı yağış (2-4 sn)
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowflake);
    setTimeout(() => { snowflake.remove(); }, duration * 1000);
}
setInterval(createSnowflake, 50); // Yoğun yağış (50ms)

// MENÜ FONKSİYONU
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.width === "300px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "300px";
    }
}

function toggleStory(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
        header.classList.remove("active");
    } else {
        // Diğer açık olanları kapatmak istersen buraya ekleme yapılabilir
        content.style.maxHeight = content.scrollHeight + "px";
        header.classList.add("active");
    }
}