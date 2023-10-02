/*==================== MENU =====================*/
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav_toggle");
    const navMenu = document.querySelector(".nav_container"); // Change to ".nav_container"

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});

/*==================== SPLASH SCREEN =====================*/

document.addEventListener("DOMContentLoaded", function() {
    const splash = document.querySelector('.splash');

    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2000);
});

/*==================== READMORE =====================*/
document.addEventListener("DOMContentLoaded", function() {
    const readMoreLink = document.querySelector(".readmore");
    const otherPart = document.querySelector(".otherPart");
  
    readMoreLink.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the link from navigating
  
      // Toggle the visibility of the "otherPart" paragraph
      otherPart.classList.toggle("visible");
      
      // Change the text of the "Read More" link based on visibility
      if (otherPart.classList.contains("visible")) {
        readMoreLink.textContent = "Read Less";
      } else {
        readMoreLink.textContent = "Read More";
      }
    });
  });

  