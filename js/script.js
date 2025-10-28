document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navgroup = document.getElementById("navgroup");

  hamburger.addEventListener("click", () => {
    navgroup.classList.toggle("show");
  });
});
