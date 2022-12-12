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