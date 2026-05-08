import "./css/base.css";
import "./css/navbar.css";
import "./css/loading.css";
import "./css/faq.css";
import "./css/membros.css";
import "./css/eventos.css";
import "./css/contato.css";
import "./css/footer.css";

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
