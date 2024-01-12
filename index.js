/*========== menu icon navbar ==========*/
// let menuIcon = document.querySelector('.fa-solid.fa-bars');
// let navbar = document.querySelector('.navbar');

// menuIcon.oneclick =()=>{
//     menuIcon.classList.toggle();
    // navbar.classList.toggle('active');
// }

/*========== sticky navbar ==========*/
// let header = document.querySelector('.header');

// header.classList.toggle('sticky', window.scrollY > 100);
// let darkModeIcon = document.querySelector('fa-regular fa-moon');

// darkModeIcon.onclick = () => {
//     darkModeIcon.classList.toggle('fa_sun');
//     document.body.classList.toggle('dark-mode');
// };

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".fa-solid.fa-bars");
    var header = document.querySelector(".header");
    var navLinks = document.querySelectorAll(".navbar a");
  
    function handleScroll() {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
      if (scrollPosition > 60) {
        header.classList.add("scrolled");
        navLinks.forEach(function (link) {
          link.style.color = "#00555a";
        });
      } else {
        header.classList.remove("scrolled");
        navLinks.forEach(function (link) {
          link.style.color = "";
        });
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    if (window.innerWidth > 768) {
      menuIcon.style.display = "none";
    }
  
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });
  
    navbar.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        navbar.classList.remove("show");
      }
    });

  });
  document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.fa-moon');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
    
        if (isDarkMode) {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        } else {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        }
    });
});


