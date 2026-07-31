// ===================================
// PORTAL MBG SPPG KARANGWARU 2
// JAVASCRIPT UTAMA
// ===================================


console.log("Portal MBG berhasil dimuat");



// Tahun otomatis footer
const tahun = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        "Portal MBG SPPG Karangwaru 2 © " + tahun;

}
