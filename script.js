const menu = [

{
icon:"📋",
nama:"Form ABSENSI KA SPPG, AK, AG, dan Relawan",
link:"https://sipgn-siphr.bgn.go.id/"
},

{
icon:"📊",
nama:"Laporan DIALUR / SMO",
link:"https://sipgn-sipsmo-web.bgn.go.id/Sign"
},

{
icon:"🏢",
nama:"SIPGN KA AK AG",
link:"https://sipgn.bgn.go.id/public"
},

{
icon:"🧪",
nama:"PIC Organoleptik ONLINE",
link:"https://pm-sipgn.bgn.go.id/auth/login"
},

{
icon:"👨‍👩‍👧",
nama:"MANAJEMEN PENERIMA MANFAAT",
link:"https://mpm-sipgn.bgn.go.id/"
},

{
icon:"🧑‍🏫",
nama:"POP khusus ASISTEN LAPANGAN",
link:"https://linktr.ee/dafahanafi"
},

{
icon:"❤️",
nama:"TAUWAS CARE",
link:"https://tauwascare.tauwas.bgn.go.id/login"
},

{
icon:"🏦",
nama:"MANDIRI KOPRA",
link:"https://koprabymandiri.com/"
},

{
icon:"➕",
nama:"TAMBAH RELAWAN ABSENSI ONLINE",
link:"https://sipgn-siphr.bgn.go.id/sign-in?callbackUrl=https%3A%2F%2Fsipgn-siphr.bgn.go.id%2Fmanajemen-tenaga-kerja%2Fkitchen-employees"
},

{
icon:"👤",
nama:"BIRO SDMO BGN",
link:"https://birosdmo.bgn.go.id/login"
},

{
icon:"🛡️",
nama:"SIPP BPJS KETENAGAKERJAAN",
link:"https://sipp.bpjsketenagakerjaan.go.id/"
}

];

const menuBox=document.getElementById("menu");

function tampil(data){

menuBox.innerHTML="";

data.forEach(item=>{

menuBox.innerHTML+=`

<a class="menu-item"

href="${item.link}"

target="_blank">

<div>

${item.icon}

&nbsp;

${item.nama}

</div>

<span>

<i class="fa-solid fa-arrow-up-right-from-square"></i>

</span>

</a>

`;

});

document.getElementById("jumlahMenu").innerHTML=data.length;

}

tampil(menu);

document.getElementById("search").addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const hasil=menu.filter(item=>

item.nama.toLowerCase().includes(keyword)

);

tampil(hasil);

});

const popup=document.getElementById("popup");

const tombol=document.getElementById("lihatQR");

const close=document.getElementById("close");

tombol.onclick=()=>{

popup.style.display="flex";

}

close.onclick=()=>{

popup.style.display="none";

}

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

}
