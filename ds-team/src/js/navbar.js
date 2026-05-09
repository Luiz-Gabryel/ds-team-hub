export function initNavbar() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const navEmail = document.getElementById("nav-email");
  const navCopy = document.getElementById("nav-copy");
  const navText = document.getElementById("nav-text");

  // hamburguer
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });

  // copiar email
  navEmail.addEventListener("click", () => {
    navigator.clipboard.writeText(navCopy.textContent.trim()).then(() => {
      navText.textContent = "Copiado";
      setTimeout(() => {
        navText.textContent = "Copiar email";
      }, 2000);
    });
  });
}
