const buttonMenu = document.querySelector(".menu-button");
const linkMenu = document.querySelectorAll(".link-menu");
const menu = document.querySelector(".show-menu");

let view = false;

linkMenu.forEach((item) =>
  item.addEventListener("click", () => {
    toShowMenu();
  })
);

buttonMenu.addEventListener("click", () => {
  toShowMenu();
});

const toShowMenu = () => {
  view = !view;
  if (view) {
    menu.classList.add("translate");
    buttonMenu.classList.add("active");
  } else {
    menu.classList.remove("translate");
    buttonMenu.classList.remove("active");
  }
};
