let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let mobileNav = document.querySelector(".mobile-nav");

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
  modal.style.display = "block";
}

function removeModal() {
  backdrop.style.display = "none";
  mobileNav.style.display = "none";
  if (modal) {
    modal.style.display = "none";
  }
}

function showMobileNav() {
  backdrop.style.display = "block";
  mobileNav.style.display = "block";
}
