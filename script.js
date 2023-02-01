let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let value = Math.round(this.window.scrollY);
  text1.style.translate = value * 3.7 + "px";
  text2.style.translate = value * -2.7 + "px";
  text3.style.translate = value * 2.5 + "px";
});

// mobil version
const mobile = window.matchMedia("(max-width: 558px)");

if (mobile.matches) {
  window.addEventListener("scroll", function () {
    let value = Math.round(this.window.scrollY);
    text1.style.translate = value * 4.7 + "px";
    text2.style.translate = value * -4.7 + "px";
    text3.style.translate = value * 4.5 + "px";
  });
}

const myFunction = () => {
  if (document.documentElement.scrollTop > 338) {
    navbar.style.color = black;
  }
};
