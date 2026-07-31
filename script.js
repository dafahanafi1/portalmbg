const links = [
  {
    title: "📋 Form ABSENSI KA SPPG, AK, AG, dan Relawan",
    url: "https://sipgn-siphr.bgn.go.id/"
  },
  {
    title: "📊 Laporan DIALUR / SMO",
    url: "https://sipgn-sipsmo-web.bgn.go.id/Sign"
  },
  {
    title: "🏢 SIPGN KA AK AG",
    url: "https://sipgn.bgn.go.id/public"
  },
  {
    title: "🧪 PIC Organoleptik ONLINE",
    url: "https://pm-sipgn.bgn.go.id/auth/login"
  },
  {
    title: "👥 MANAJEMEN PENERIMA MANFAAT",
    url: "https://mpm-sipgn.bgn.go.id/"
  },
  {
    title: "👨‍💼 POP khusus ASISTEN LAPANGAN",
    url: "https://linktr.ee/dafahanafi"
  },
  {
    title: "❤️ TAUWAS CARE",
    url: "https://tauwascare.tauwas.bgn.go.id/login"
  },
  {
    title: "🏦 MANDIRI KOPRA",
    url: "https://koprabymandiri.com/"
  },
  {
    title: "➕ TAMBAH RELAWAN ABSENSI ONLINE",
    url: "https://sipgn-siphr.bgn.go.id/sign-in?callbackUrl=https%3A%2F%2Fsipgn-siphr.bgn.go.id%2Fmanajemen-tenaga-kerja%2Fkitchen-employees"
  },
  {
    title: "👤 BIRO SDMO BGN",
    url: "https://birosdmo.bgn.go.id/login"
  },
  {
    title: "🛡️ SIPP BPJS KETENAGAKERJAAN",
    url: "https://sipp.bpjsketenagakerjaan.go.id/"
  }
];

const menu = document.getElementById("menu");
const search = document.getElementById("search");

function tampilkanMenu(filter = "") {

  menu.innerHTML = "";

  links
    .filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach(item => {

      menu.innerHTML += `
      <a class="link" href="${item.url}" target="_blank">
          <span>${item.title}</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
      `;

    });

}

tampilkanMenu();

search.addEventListener("input", function () {
  tampilkanMenu(this.value);
});
