const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "10px",
  duration: 2000,
  reset: true,
});
sr.reveal(".home-text", { delay: 150, origin: "left" });
sr.reveal(".home-img", { delay: 150, origin: "right" });

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxLu0fhI-TdBS9pvtB3pHOlf664lbwZnMhGtOkWlWPazAyEJ0EtHxd7C-6ayPbQv70W/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Email sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
