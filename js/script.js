// Initialize
window.scrollTo(0, 0);

// Mobile Effects
const mobLeftButton = document.querySelector("#experience-back-btn");
const mobParent = document.querySelector("#adds");

const mobExpTitle = document.querySelector("#experience-phone-title");
const mobExpImage = document.querySelector("#experience-phone-image");
const mobExpValue = document.querySelector("#experience-phone-value");
const mobExpLocation = document.querySelector("#experience-phone-location");

mobLeftButton.onclick = () => {
   mobParent.style.display = "none";
};

// Navbar
const navContents = document.querySelectorAll("header nav .right button");
const navLogo = document.querySelector("header nav .left");
for (const button of navContents) {
   button.onclick = (e) => {
      const data = e.target.dataset.id;
      window.open(data, "_self");
   };
}
navLogo.onclick = (e) => {
   const data = e.target.dataset.id;
   window.open(data, "_self");
};
if (window.innerWidth <= 767) {
   const nav = document.querySelector("header nav .right");
   const toggler = document.querySelector("header nav .mobile");

   toggler.onclick = () => {
      toggler.classList.toggle("active");
      nav.classList.toggle("active");
   };
}

// Introduction Section
const introAction = document.querySelector("#introduction-action");
const introActionOptions = ["pemeliharaan", "pembangunan", "perencanaan"];
let introActionIndex = 0;

const introTypeAction = document.querySelector("#introduction-type-action");
const introTypeActionOptions = [
   "hunian",
   "perkantoran",
   "industri",
   "perbelanjaan",
   "pendidikan",
   "pembangunan",
];
let introTypeActionIndex = 0;

const introSection = document.querySelector("#introduction");
const introOffset = {
   bottom: introSection.clientTop + introSection.clientHeight,
};

// Experience Section
const expDatas = [
   {
      image: "../images/aks-experience-fatmawati.png",
      type: "apartement",
      title: "The Aspen Peak",
      valuation: "4.5 B",
      location: "Fatmawati",
   },
   {
      image: "../images/aks-experience-bogor.png",
      type: "apartement",
      title: "Suites Mansion",
      valuation: "20 B",
      location: "Bogor",
   },
   {
      image: "../images/aks-experience-margonda.png",
      type: "apartement",
      title: "Trimegah Project",
      valuation: "20 B",
      location: "Margonda",
   },
   {
      image: "../images/aks-experience-cimanggis.png",
      type: "residence",
      title: "Arkatama Townhouse",
      valuation: "1.5 B",
      location: "Cimanggis",
   },
];
const expCard = document.querySelector("#experience .wrapper .left");
const expCardHeight = expCard.clientHeight;
for (const data of expDatas) {
   const { image, type, title, valuation, location } = data;
   expCard.insertAdjacentHTML(
      `afterbegin`,
      `
      <div class="card" data-src="${image}" data-title="${title}" data-valuation="${valuation}" data-location="${location}">
         <div class="card-left">
            <img src=${image} alt="img">
         </div>
         <div class="card-right">
            <h2 class=${type}>${type}</h2>
            <p>${title}</p>
         </div>
      </div>
   `
   );
}
const expView = document.querySelector("#experience .wrapper .right");
const expContents = document.querySelectorAll(
   "#experience .wrapper .left .card"
);
const expRightTitle = document.querySelector(
   "#experience .wrapper .right .info .info-left h2"
);
const expRightValuation = document.querySelector(
   "#experience .wrapper .right .info .info-center p"
);
const expRightLocation = document.querySelector(
   "#experience .wrapper .right .info .info-right p"
);
for (const content of expContents) {
   content.onclick = () => {
      const data = content.dataset.src;
      const title = content.dataset.title;
      const val = content.dataset.valuation;
      const location = content.dataset.location;

      expView.style.background = `url("${data}")`;
      expView.style.backgroundSize = `cover`;
      expView.style.backgroundRepeat = `no-repeat`;

      expRightTitle.textContent = title;
      expRightLocation.textContent = location;
      expRightValuation.textContent = val;

      mobExpImage.src = data;
      mobExpLocation.textContent = location;
      mobExpTitle.textContent = title;
      mobExpValue.textContent = val;

      // Detect Mobile Size
      if (window.innerWidth <= 767) mobParent.style.display = "block";
   };
}

// Service Section
const servDatas = [
   {
      image: "../images/aks-service-interior.png",
      title: "Desain Interior",
      logo: "images/aks-service-interior-logo.png",
   },
   {
      image: "../images/aks-service-construction.png",
      title: "Konstruksi",
      logo: "images/aks-service-construction-logo.png",
   },
   {
      image: "../images/aks-service-engineer.png",
      title: "Ahli Mesin",
      logo: "images/aks-service-engineer-logo.png",
   },
];
const servContainer = document.querySelector("#service .wrapper .right");
for (const data of servDatas) {
   const { image, title, logo } = data;
   servContainer.insertAdjacentHTML(
      `afterbegin`,
      `
      <div class="service-card">
         <div class="top">
            <img id="experience-phone-image" src="${image}" alt="img">
            <h2 id="experience-phone-title">${title}</h2>
         </div>
         <div class="bottom">
            <img src="${logo}" alt="">
         </div>
      </div>
   `
   );
}

// Footer Section
const locationBtn = document.querySelector("footer .wrapper .left #address");
locationBtn.onclick = () => {
   window.open("https://www.google.com/maps/place/data=!3m1!4b1!4m6!3m5!1s0x2e69ed9c500c93a1:0xabe9839d93aed2c5!8m2!3d-6.3511323!4d106.844678!16s%2Fg%2F11t_q1ljl9?entry=ttu", "_blank");
}

// Introduction Effects
const introLogo = document.querySelector("#introduction img");
const introHeader = document.querySelector("#introduction h1");
const introActionModify = () => {
   if (introActionIndex > introActionOptions.length - 1) introActionIndex = 0;
   if (introTypeActionIndex > introTypeActionOptions.length - 1)
      introTypeActionIndex = 0;

   introAction.textContent = introActionOptions[introActionIndex];
   introActionIndex++;
   introTypeAction.textContent = introTypeActionOptions[introTypeActionIndex];
   introTypeActionIndex++;

   setTimeout(() => {
      introLogo.style.animation = "none";
   }, 1500);
   introLogo.style.animation = "pop .4s ease";
   setTimeout(() => {
      introHeader.style.animation = "none";
   }, 1500);
   introHeader.style.animation = "stretch .8s ease";
};

// Animation
let loadBarValue = 0;
const introLoadBar = () => {
   const loadBarSpeed = 0.2;
   const loadBar = document.querySelector("#introduction-loading-bar");

   loadBarValue += loadBarSpeed;
   loadBar.style.width = `${(loadBarValue / 100) * 100}%`;

   if (loadBarValue > 100) {
      loadBarValue = 0;
      introActionModify();
   }
   requestAnimationFrame(introLoadBar);
};
introLoadBar();

// Scroll Effect
window.onscroll = () => {
   const yPos = window.scrollY;
   const sections = document.querySelectorAll("section");

   // Navbar Auto Active
   for (const section of sections) {
      const secTop = section.offsetTop - 200;
      const secBot = secTop + section.offsetHeight;
      const attribute = section.getAttribute("id");

      if (yPos >= secTop && yPos <= secBot) {
         const target = document.querySelector(
            `header nav .right button[data-id="#${attribute}"]`
         );
         for (const button of navContents) {
            button.classList.remove("active");
         }
         if (target != null) target.classList.add("active");
      }
   }

   // Navbar Hide
   const navbar = document.querySelector(`header`);
   navbar.style.transform = "translateY(-10rem)";
   navbar.style.transition = "1s";
   setTimeout(() => {
      navbar.style.transform = "translateY(0)";
   }, 1000);
};

// Resize Effect
window.onresize = () => {
   mobParent.style.display = "none";
   location.reload();
};
