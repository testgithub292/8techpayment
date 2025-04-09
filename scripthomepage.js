  // Get the navbar
  const navbar = document.querySelector('.navbar');

  // Listen for scroll event
  window.addEventListener('scroll', function() {
    if (window.scrollY >= 500) {
      navbar.classList.add('scrolled');
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.remove('hidden');
    }
  });


  //=============================================================

  gsap.registerPlugin(ScrollTrigger);


  const section10CardsContainer3 = document.getElementById("section10CardsContainer3");
  

  
  gsap.to(section10CardsContainer3, {
    x: () => -(section10CardsContainer3.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#section10CardsWrapper3",
      start: "top top",
      end: () => `+=${section10CardsContainer3.scrollWidth}`,
      pin: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });
  

  //========================================================================

  function sendMail() {
    window.location.href = "mailto:support@8techpayment.com?subject=Business%20Inquiry%20Regarding%208Tech%20Payment&body=Dear%208Tech%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20crypto%20payment%20solutions.%20Please%20let%20me%20know%20how%20we%20can%20proceed%20with%20a%20potential%20collaboration.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]";
  }