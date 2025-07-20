const burger = document.querySelector(".burger"),
menu = document.querySelector(".menu"),
close = document.querySelector(".menu__close");
//  ACTIVATION AND CLOSE MENU
burger.addEventListener("click", () => { menu.classList.add("active"); });
close.addEventListener("click", () => { menu.classList.remove("active"); });