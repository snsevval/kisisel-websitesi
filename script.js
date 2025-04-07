let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
  let scrollTop = document.querySelector("#scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("active", window.scrollY > 500); // 500px aşağıya kaydırdığında butonu göster
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Üste kaydırma efekti
});
