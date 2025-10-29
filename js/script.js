document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navgroup = document.querySelector(".header__navgroup");

  hamburger.addEventListener("click", () => {
    navgroup.classList.toggle("show");
  });
});