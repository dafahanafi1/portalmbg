const menus = [
  {
    icon: "📋",
    title: "Form ABSENSI KA SPPG, AK, AG, dan Relawan",
    url: "https://sipgn-siphr.bgn.go.id/"
  },
  {
    icon: "📊",
    title: "Laporan DIALUR / SMO",
    url: "https://sipgn-sipsmo-web.bgn.go.id/Sign"
  },
  {
    icon: "🏢",
    title: "SIPGN KA AK AG",
    url: "https://sipgn.bgn.go.id/public"
  },
  {
    icon: "🧪",
    title: "PIC Organoleptik ONLINE",
    url: "https://pm-sipgn.bgn.go.id/auth/login"
  },
  {
    icon: "👥",
    title: "MANAJEMEN PENERIMA MANFAAT",
    url: "https://mpm-sipgn.bgn.go.id/"
  },
  {
    icon: "👨‍💼",
    title: "POP khusus ASISTEN LAPANGAN",
    url: "https://linktr.ee/dafahanafi"
  },
  {
    icon: "❤️",
    title: "TAUWAS CARE",
    url: "https://tauwascare.tauwas.bgn.go.id/login"
  },
  {
    icon: "🏦",
    title: "MANDIRI KOPRA",
    url: "https://koprabymandiri.com/"
  },
  {
    icon: "➕",
    title: "TAMBAH RELAWAN ABSENSI ONLINE",
    url: "https://sipgn-siphr.bgn.go.id/sign-in?callbackUrl=https%3A%2F%2Fsipgn-siphr.bgn.go.id%2Fmanajemen-tenaga-kerja%2Fkitchen-employees"
  },
  {
    icon: "👤",
    title: "BIRO SDMO BGN",
    url: "https://birosdmo.bgn.go.id/login"
  },
  {
    icon: "🛡️",
    title: "SIPP BPJS KETENAGAKERJAAN",
    url: "https://sipp.bpjsketenagakerjaan.go.id/"
  }
];

const menuContainer = document.getElementById("menuContainer");
const search = document.getElementById("search");
const jumlahMenu = document.getElementById("jumlahMenu");

function renderMenu(data) {
  menuContainer.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("a");
    card.className = "menu-card";
    card.href = item.url;
    card.target = "_blank";

    card.innerHTML = `
      <div class="menu-left">
        <div class="iconBox">${item.icon}</div>
        <div class="menu-title">${item.title}</div>
      </div>

      <div class="arrow">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
    `;

    menuContainer.appendChild(card);
  });

  jumlahMenu.textContent = data.length;
}

renderMenu(menus);

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();

  const hasil = menus.filter(menu =>
    menu.title.toLowerCase().includes(keyword)
  );

  renderMenu(hasil);
});

// Popup QRIS
const popup = document.getElementById("popup");
const openQR = document.getElementById("openQR");
const close = document.getElementById("close");

openQR.addEventListener("click", () => {
  popup.style.display = "flex";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
