
                //  Navbar js
 const toggleBtn = document.getElementById("menu-toggle");
    const menuContent = document.getElementById("menu-content");

    let isOpen = false;

    toggleBtn.addEventListener("click", () => {
      isOpen = !isOpen;
      toggleBtn.innerHTML = isOpen ? "&times;" : "&#9776;";
      if (isOpen) {
        menuContent.classList.remove("max-h-0");
        menuContent.classList.add("max-h-[2000px]"); // large enough to fit all content
      } else {
        menuContent.classList.remove("max-h-[2000px]");
        menuContent.classList.add("max-h-2");
      }
    });
                // end of Navbar js 

                // hero section js
 
    // Typing animation
   
  const textElement = document.getElementById("type-text");

  const sentences = [
    { lines: ["PROPERTY", "INVESTMENT"], color: "#A073CB" }, 
    { lines: ["PROPERTY", "FINANCE"], color: "#EA5148" }    
  ];

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  sentences.forEach(({ lines, color }) => {
    const fullText = lines.join("\n");
    const length = fullText.length;

    // Typing Forward
    for (let i = 0; i <= length; i++) {
      ((charIndex) => {
        tl.to({}, {
          duration: 0.2,
          onUpdate: () => {
            textElement.textContent = fullText.substring(0, charIndex);
            textElement.style.color = color;
          }
        });
      })(i);
    }

    tl.to({}, { duration: 1 });

    // Typing Reverse
    for (let i = length; i >= 0; i--) {
      ((charIndex) => {
        tl.to({}, {
          duration: 0.14,
          onUpdate: () => {
            textElement.textContent = fullText.substring(0, charIndex);
            textElement.style.color = color;
          }
        });
      })(i);
    }

    tl.to({}, { duration: 0.5 });
  });



    // Image swap + logo/button visibility
    const images = ["images/computer.webp", "images/home.webp"];
        // images.style.height="cover";

    const heroImg = document.getElementById("hero-img");
    const logo = document.getElementById("logo");
    const button = document.getElementById("register-btn");

    let imgIndex = 0;

    setInterval(() => {
      // Fade out image and button/logo
      heroImg.classList.add("opacity-0");
      logo.classList.add("opacity-0");
      button.classList.add("opacity-0");

      setTimeout(() => {
        // Change image
        imgIndex = (imgIndex + 1) % images.length;
        heroImg.src = images[imgIndex];

        // Show/hide logo & button only for first image
        if (images[imgIndex] === "images/computer.webp") {
          logo.classList.remove("opacity-0");
          button.classList.remove("opacity-0");
        }

        // Fade image in
        heroImg.classList.remove("opacity-0");
      }, 400);
    }, 5000);
  
  
             // end of hero section js

             // Reviews section
const swiper = new Swiper('.card-wrapper', {
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1040: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1400: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  },

  on: {
    init: function () {
      updateNavButtons(this);
    },
    slideChange: function () {
      updateNavButtons(this);
    },
    resize: function () {
      updateNavButtons(this);
    }
  }
});


function updateNavButtons(swiper) {
  const prev = document.querySelector('.swiper-button-next');
  const next = document.querySelector('.swiper-button-prev');

  const { slidesPerView, slidesPerGroup } = swiper.params.breakpoints[swiper.currentBreakpoint] || {};
  const totalSlides = swiper.slides.length;
  const currentIndex = swiper.activeIndex;
  const maxIndex = totalSlides - slidesPerGroup;

 
  if (currentIndex <= 0) {
    prev.style.display = 'block';
  } else {
    prev.style.display = 'block';
  }

  
  if (currentIndex >= maxIndex) {
    next.style.display = 'block'; 
  } else {
    next.style.display = 'block';
  }
}
              //end of Reviews section

               // card New section
const news = new Swiper('.news-wrapper', {
  loop: true,
  Autoplay:true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1080: { slidesPerView: 3 },
  },
    on: {
    init: function () {
      updateNavButtons(this);
    },
    slideChange: function () {
      updateNavButtons(this);
    },
    resize: function () {
      updateNavButtons(this);
    }
  }
});
                // end of News section

                // logo slider
const swipers= new Swiper('.logo-wrapper', {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1040: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
  
  },

  on: {
    init: function () {
      updateNavButtons(this);
    },
    slideChange: function () {
      updateNavButtons(this);
    },
    resize: function () {
      updateNavButtons(this);
    }
  }
});
                // end of logo slider


                //   Mortagaes js

  function toggleAccordion(button, containerId) {
    const container = document.getElementById(containerId);
    const allContents = container.querySelectorAll('.accordion-content');
    const allArrows = container.querySelectorAll('button span');

    allContents.forEach(content => {
      if (content.previousElementSibling !== button) {
        content.style.maxHeight = null;
      }
    });

    allArrows.forEach(arrow => {
      if (arrow.parentElement !== button) {
        arrow.classList.remove('rotate-180');
      }
    });

    const content = button.nextElementSibling;
    const arrow = button.querySelector('span');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.classList.remove('rotate-180');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.classList.add('rotate-180');
    }
  }





