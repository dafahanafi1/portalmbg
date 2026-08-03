function updateClock() {

    const now = new Date();

    const jam = String(now.getHours()).padStart(2, "0");
    const menit = String(now.getMinutes()).padStart(2, "0");
    const detik = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerHTML =
        jam + ":" + menit + ":" + detik;
}

updateClock();
setInterval(updateClock, 1000);

function toggleTutorial() {

    const menu = document.getElementById("tutorialMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}
