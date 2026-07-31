function updateClock(){

    let waktu = new Date();

    let jam = String(waktu.getHours()).padStart(2,"0");

    let menit = String(waktu.getMinutes()).padStart(2,"0");

    let detik = String(waktu.getSeconds()).padStart(2,"0");


    document.getElementById("clock").innerHTML =
    jam + ":" + menit + ":" + detik;

}


updateClock();


setInterval(updateClock,1000);
