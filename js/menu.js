document.documentElement.classList.add("js");

window.addEventListener("DOMContentLoaded", function () {
  let bouton = document.querySelector(".menu-btn");
  let menu = document.getElementById("menu");

  bouton.addEventListener("click", function () {
    let ouvert = menu.classList.toggle("ouvert");
    bouton.setAttribute("aria-expanded", ouvert);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("ouvert")) {
      menu.classList.remove("ouvert");
      bouton.setAttribute("aria-expanded", "false");
      bouton.focus();
    }
  });
});
