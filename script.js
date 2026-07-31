const menus = [
{
icon:"fa-solid fa-clipboard-check",
title:"Form ABSENSI KA SPPG, AK, AG, dan Relawan",
url:"https://sipgn-siphr.bgn.go.id/"
},
{
icon:"fa-solid fa-chart-line",
title:"Laporan DIALUR / SMO",
url:"https://sipgn-sipsmo-web.bgn.go.id/Sign"
},
{
icon:"fa-solid fa-building",
title:"SIPGN KA AK AG",
url:"https://sipgn.bgn.go.id/public"
},
{
icon:"fa-solid fa-flask",
title:"PIC Organoleptik ONLINE",
url:"https://pm-sipgn.bgn.go.id/auth/login"
},
{
icon:"fa-solid fa-users",
title:"MANAJEMEN PENERIMA MANFAAT",
url:"https://mpm-sipgn.bgn.go.id/"
},
{
icon:"fa-solid fa-user-tie",
title:"POP khusus ASISTEN LAPANGAN",
url:"https://linktr.ee/dafahanafi"
},
{
icon:"fa-solid fa-heart",
title:"TAUWAS CARE",
url:"https://tauwascare.tauwas.bgn.go.id/login"
},
{
icon:"fa-solid fa-building-columns",
title:"MANDIRI KOPRA",
url:"https://koprabymandiri.com/"
},
{
icon:"fa-solid fa-user-plus",
title:"TAMBAH RELAWAN ABSENSI ONLINE",
url:"https://sipgn-siphr.bgn.go.id/sign-in?callbackUrl=https%3A%2F%2Fsipgn-siphr.bgn.go.id%2Fmanajemen-tenaga-kerja%2Fkitchen-employees"
},
{
icon:"fa-solid fa-user-gear",
title:"BIRO SDMO BGN",
url:"https://birosdmo.bgn.go.id/login"
},
{
icon:"fa-solid fa-shield-halved",
title:"SIPP BPJS KETENAGAKERJAAN",
url:"https://sipp.bpjsketenagakerjaan.go.id/"
}
];

const menuContainer = document.getElementById("menuContainer");
const search = document.getElementById("search");
const jumlahMenu = document.getElementById("jumlahMenu");

function tampilMenu(data){

menuContainer.innerHTML="";

data.forEach(item=>{

menuContainer.innerHTML+=`
<a href="${item.url}" target="_blank" class="menu-card">

<div class="menu-left">

<div class="icon">
<i class="${item.icon}"></i>
</div>

<div class="menu-title">
${item.title}
</div>

</div>

<div class="arrow">
<i class="fa-solid fa-chevron-right"></i>
</div>

</a>
`;

});

jumlahMenu.innerText=data.length;

}

tampilMenu(menus);

search.addEventListener("keyup",()=>{

const keyword=search.value.toLowerCase();

const hasil=menus.filter(item=>

item.title.toLowerCase().includes(keyword)

);

tampilMenu(hasil);

});

const popup=document.getElementById("popup");
const openQR=document.getElementById("openQR");
const closePopup=document.getElementById("closePopup");

openQR.onclick=()=>{
popup.style.display="flex";
}

closePopup.onclick=()=>{
popup.style.display="none";
}

popup.onclick=(e)=>{
if(e.target===popup){
popup.style.display="none";
}
}
