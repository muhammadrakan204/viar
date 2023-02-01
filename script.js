let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let navbar = document.querySelector(".navbar");
const kartu1 = document.querySelector(".card1");
const kartu2 = document.querySelector(".card2");
const kartu3 = document.querySelector(".card3");

window.addEventListener("scroll", function () {
  let value = Math.round(this.window.scrollY);
  text1.style.translate = value * 3.7 + "px";
  text2.style.translate = value * -2.7 + "px";
  text3.style.translate = value * 2.5 + "px";
});

// mobil version
const mobile = window.matchMedia("(max-width: 558px)");
const scrollMobile = document.documentElement.scrollTop > 50;

if (mobile.matches) {
  window.addEventListener("scroll", function () {
    let value = Math.round(this.window.scrollY);
    text1.style.translate = value * 5 + "px";
    text2.style.translate = value * -5.7 + "px";
    text3.style.translate = value * 4.5 + "px";
  });
}

const myFunction = () => {
  if (document.documentElement.scrollTop > 338) {
    navbar.style.color = black;
  }
};

// window.onscroll = function () {
//   cardScroll();
// };

// const cardScroll = () => {
//   if (document.documentElement.scrollTop > 950) {
//     kartu1.classList.add("active");
//     kartu2.classList.add("active");
//     kartu3.classList.add("active");
//   }
//   if (mobile.matches && document.documentElement.scrollTop > 2700) {
//     kartu1.classList.add("active");
//   }
// };
