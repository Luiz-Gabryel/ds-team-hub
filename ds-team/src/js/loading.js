export function initLoading() {
  window.addEventListener("load", () => {
    const texto = "Bem-Vindo ao O Trio - 2ºDS";
    const elemento = document.getElementById("texto");

    let i = 0;

    function digitar() {
      if (i < texto.length) {
        elemento.textContent += texto[i];
        i++;
        setTimeout(digitar, 100);
      } else {
        setTimeout(() => {
          document.getElementById("loading").style.display = "none";
        }, 800);
      }
    }

    digitar();
  });
}