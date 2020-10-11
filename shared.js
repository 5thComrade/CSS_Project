let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let mobileNav = document.querySelector(".mobile-nav");
let ctaButton = document.querySelector(".main-nav__item--cta");

ctaButton.addEventListener("animationstart", function (event) {
  console.log("Animation Started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("Animation Ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("Animation iteration", event);
});

let selectPlanButton = document
  .querySelectorAll(".plan button")
  .forEach((button) => {
    button.addEventListener("click", displayModal);
  });

backdrop.addEventListener("click", removeModal);

if (modal) {
  document
    .querySelector(".modal__action.modal__action--negative")
    .addEventListener("click", removeModal);
}

document
  .querySelector(".toggle-button")
  .addEventListener("click", showMobileNav);

function displayModal() {
  backdrop.style.display = "block";
  modal.classList.add("open");
}

function removeModal() {
  backdrop.style.display = "none";
  mobileNav.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
}

function showMobileNav() {
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
}
