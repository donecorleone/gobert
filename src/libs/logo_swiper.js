import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", function () {
  let currentSwiper = null; // Speichert aktive Swiper-Instanz

  function initSwiper(container) {
    if (currentSwiper) {
      currentSwiper.destroy(true, true); // Swiper komplett zerstören
      currentSwiper = null;
    }

    setTimeout(() => {
      currentSwiper = new Swiper(container + " .swiper", {
        modules: [Navigation],
        navigation: {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        },
      });
    }, 50); // Verzögerung, um sicherzustellen, dass `hidden` entfernt wurde
  }

  const btnDamen = document.getElementById("btn-damen");
  const btnHerren = document.getElementById("btn-herren");
  const swiperDamen = document.getElementById("swiper-damen");
  const swiperHerren = document.getElementById("swiper-herren");

  btnDamen.addEventListener("click", () => {
    if (!swiperDamen.classList.contains("hidden")) return; // Doppelklick verhindern
    swiperHerren.classList.add("hidden");
    swiperDamen.classList.remove("hidden");
    btnDamen.classList.add("active");
    btnHerren.classList.remove("active");
    initSwiper("#swiper-damen");
  });

  btnHerren.addEventListener("click", () => {
    if (!swiperHerren.classList.contains("hidden")) return;
    swiperDamen.classList.add("hidden");
    swiperHerren.classList.remove("hidden");
    btnHerren.classList.add("active");
    btnDamen.classList.remove("active");
    initSwiper("#swiper-herren");
  });

  // Initial nur den Damen-Swiper laden
  swiperHerren.classList.add("hidden"); // Sicherstellen, dass Herren-Swiper versteckt ist
  initSwiper("#swiper-damen");
});
