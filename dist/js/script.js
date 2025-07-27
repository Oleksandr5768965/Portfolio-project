const burger = document.querySelector(".burger"),
menu = document.querySelector(".menu"),
close = document.querySelector(".menu__close"),
link = document.querySelectorAll(".menu__link a");
//  ACTIVATION AND CLOSE MENU
burger.addEventListener("click", () => { menu.classList.add("active"); });
close.addEventListener("click", () => { menu.classList.remove("active"); });
link.forEach((linkItem) => {
    linkItem.addEventListener("click", () => {
         menu.classList.remove("active");
    });
});

const counters = document.querySelectorAll(".statusbars__item-percent"),
      lines = document.querySelectorAll(".statusbars__item-progress div");

counters.forEach((item , i) => {
    lines[i].style.width = item.innerHTML;
});

const darkModeSwitch = document.querySelector(".input"),
      body = document.querySelector("body");
darkModeSwitch.addEventListener("change", () => {
    if (darkModeSwitch.checked === true) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
         body.style.color = "black";
    }
})