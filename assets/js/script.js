// JavaScript For Sticky Header

window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 100);
  });
  
  // JavaScript For Mobile Menu
  
  const bars_icon = document.getElementById("bars");
  const cross_icon = document.getElementById("cross-icon");
  const quote_icon = document.getElementById("quote-icon");
  const mobile_nav = document.getElementById("mobile-nav");
  
  bars_icon.addEventListener("click", () => {
    mobile_nav.classList.add("active");
  });
  
  cross_icon.addEventListener("click", () => {
    mobile_nav.classList.remove("active");
  });
  
  quote_icon.addEventListener("click", () => {
    mobile_nav.classList.remove("active");
  });
  
  // JavaScript For Sticky Mobile Header
  
  window.addEventListener("scroll", function () {
    const header = document.getElementById("Mobile-menu");
    header.classList.toggle("sticky", window.scrollY > 100);
  })
  