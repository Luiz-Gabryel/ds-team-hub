import "./css/base.css";
import "./css/navbar.css";
import "./css/loading.css";
import "./css/faq.css";
import "./css/membros.css";
import "./css/eventos.css";
import "./css/contato.css";
import "./css/footer.css";

import { initFaq } from "./js/faq.js";
import { initLoading } from "./js/loading.js";
import { initMembros } from "./js/membros.js";
import { initNavbar } from "./js/navbar.js";
import { initEaster } from "./js/easter.js";

document.addEventListener("DOMContentLoaded", () => {
  initFaq();
  initLoading();
  initMembros();
  initNavbar();
  initEaster();
});
