function toggleDropDown(event) {
  const button = event.currentTarget;
  const menu = button.nextElementSibling;

  menu.classList.toggle("visible");

  document.querySelectorAll(".dropdown-menu").forEach((otherMenu) => {
    if (otherMenu !== menu) {
      otherMenu.classList.remove("visible");
    }
  });
}

function closeDropDownOnClickOutside(event) {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!dropdown.contains(event.target)) {
      menu.classList.remove("visible");
    }
  });
}

function initializeDropDown() {
  const buttons = document.querySelectorAll(".dropdown-button");
  buttons.forEach((button) => button.addEventListener("click", toggleDropDown));

  document.addEventListener("click", closeDropDownOnClickOutside);
}

initializeDropDown();
