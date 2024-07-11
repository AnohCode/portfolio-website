let menuIcon = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

const typed = new Typed(".type-text", {
  strings: ["Anoh", "Khristian Rodas", "Lover Boy"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
