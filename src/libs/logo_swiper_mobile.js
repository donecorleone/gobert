document.addEventListener("DOMContentLoaded", function () {
  let currentSwiper;

  function initSwiper(containerId) {
    if (currentSwiper) currentSwiper.destroy(true, true);

    const container = document.querySelector(containerId);
    if (!container) return;

    const nextButton = container
      .closest(".logo-slider-container")
      .querySelector(".custom-next");
    const prevButton = container
      .closest(".logo-slider-container")
      .querySelector(".custom-prev");

    currentSwiper = new Swiper(container.querySelector(".swiper"), {
      modules: [Navigation],
      loop: true,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }

  const btnDamen = document.getElementById("btn-damen");
  const btnHerren = document.getElementById("btn-herren");
  const swiperDamen = document.getElementById("swiper-damen");
  const swiperHerren = document.getElementById("swiper-herren");

  btnDamen.addEventListener("click", () => {
    swiperDamen.classList.remove("versteckt");
    swiperHerren.classList.add("versteckt");
    btnDamen.classList.add("active");
    btnHerren.classList.remove("active");
    initSwiper("#swiper-damen");
  });

  btnHerren.addEventListener("click", () => {
    swiperHerren.classList.remove("versteckt");
    swiperDamen.classList.add("versteckt");
    btnHerren.classList.add("active");
    btnDamen.classList.remove("active");
    initSwiper("#swiper-herren");
  });

  // Initial Damen-Swiper aktivieren
  initSwiper("#swiper-damen");
});
