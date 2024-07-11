$(function () {
  var width = $(window).width();
  if (width > 991) {
    /* ===============================  scroll  =============================== */


    const localStorageLang = localStorage.getItem('SDC_language');
    const currentLang = localStorageLang ? JSON.parse(localStorageLang) : null;

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray('.panel');

    gsap.to(sections, {
      xPercent: currentLang === "ar"  ? 100 * (sections.length - 1) : -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.thecontainer',
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => '+=' + document.querySelector('.thecontainer').offsetWidth,
      },
    });
  }
});
