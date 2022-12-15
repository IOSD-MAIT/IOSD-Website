//////////// THEME /////////////////////

var darkBtn = document.querySelectorAll(".dark_mode");
var lightBtn = document.querySelectorAll(".light_mode");

darkBtn[0].addEventListener("click", function () {
    lightBtn[0].classList.remove('hide');
    darkBtn[0].classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'dark');
    // localStorage.setItem('theme', 'dark');
});

lightBtn[0].addEventListener("click", function () {
    darkBtn[0].classList.remove('hide');
    lightBtn[0].classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'light');
    // localStorage.setItem('theme', 'light');

});

////////////// SCROLL ///////////////////

const sections = Array.prototype.slice.call(document.querySelectorAll(".section"));

window.addEventListener("scroll", function() {
  const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop-120;
      let sectionId = current.getAttribute("id");
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
      {
        // document.querySelector(".menu a[href*=" + sectionId + "]").classList.add("selected")

        if(sectionId != "home") 
        {
          document.querySelector(".fixed-social").classList.add("fixed-social-show");
          document.querySelector(".back-to-top").classList.add("back-to-top-show");
        } 
        else {
          document.querySelector(".fixed-social").classList.remove("fixed-social-show");
          document.querySelector(".back-to-top").classList.remove("back-to-top-show");
          }
      } 
    //   else 
    //   {
    //     document.querySelector(".menu a[href*=" + sectionId + "]").classList.remove("selected");
    //   }
    });
});