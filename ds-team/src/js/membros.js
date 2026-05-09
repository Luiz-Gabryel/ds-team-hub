export function initMembros() {
  const membros = document.querySelectorAll(".membro");

  membro.addEventListener("click", () => {
    const info = membro.querySelector(".membro-info p");
    const textoOriginal = info.textContent;
    const frase = membro.dataset.frase;

    membro.classList.toggle("active");
  });
}
