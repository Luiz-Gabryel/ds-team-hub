import { initFaq } from "./faq.js";
import { initLoading } from "./loading.js";
import { initMembros } from "./membros.js";
import { initNavbar } from "./navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  initFaq();
  initLoading();
  initMembros();
  initNavbar();
});
