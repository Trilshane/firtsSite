"use strict";
window.addEventListener("DOMContentLoaded", () => {
  let openMenu = document.querySelector(".openMenu"),
    menu = document.querySelector(".menu"),
    menuStyle = getComputedStyle(menu);

  openMenu.addEventListener("click", () => {
    if (menuStyle.display == "none") {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });
});
