
// JavaScript for handling active navigation links
document.addEventListener("scroll", function() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".link-group .link a");

  sections.forEach((section, index) => {
      let top = section.offsetTop - 50; // Offset for better visibility
      let bottom = top + section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
          navLinks[index].classList.add("active");
      } else {
          navLinks[index].classList.remove("active");
      }
  });
});
