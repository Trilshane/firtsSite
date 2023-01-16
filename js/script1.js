"use strict";
window.addEventListener("DOMContentLoaded", () => {
  let tabs = document.querySelectorAll(".consultationtabheader__item"),
    tabsContent = document.querySelectorAll(".consultationtabcontent"),
    tabsParent = document.querySelector(".consultationtabheader");
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("consultationtabheader__item__active");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("consultationtabheader__item__active");
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("consultationtabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
