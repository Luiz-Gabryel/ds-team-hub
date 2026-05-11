export function initEaster() {
  const codigo1 = ["2", "d", "s"];
  const codigo2 = ["o", "t", "r", "i", "o"];
  const codigo3 = ["l", "u", "i", "z"];
  const codigo4 = ["v", "i", "v", "i", "a", "n", "e"];
  const codigo5 = ["g", "u", "s", "t", "a", "v", "o"];
  const codigo6 = ["a", "s", "t", "e", "r"];

  let ativado1 = false;
  let ativado2 = false;
  let ativado3 = false;
  let ativado4 = false;
  let ativado5 = false;
  let ativado6 = false;

  let timerEscalaDeCinza = null;

  const digitado = [];

  function atualizarFiltros() {
    const filtros = [];

    if (ativado1) filtros.push("invert(1)");
    if (ativado5) filtros.push("grayscale(100%)");

    document.body.style.filter = filtros.join(" ");
  }

  function mostrarToast(mensagem) {
    const toast = document.createElement("div");

    toast.textContent = mensagem;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.padding = "12px 18px";
    toast.style.background = "#111";
    toast.style.color = "#fff";
    toast.style.borderRadius = "10px";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  const membros = document.querySelectorAll(".membro");
  const textosOriginais = [];

  membros.forEach((membro) => {
    const info = membro.querySelector(".membro-info p");
    textosOriginais.push(info.textContent);
  });

  document.addEventListener("keydown", (e) => {
    digitado.push(e.key.toLowerCase());

    if (digitado.length > 20) {
      digitado.shift();
    }

    const texto = digitado.join("");

    // 2DS
    if (texto.includes(codigo1.join(""))) {
      ativado1 = !ativado1;

      mostrarToast(
        ativado1 ? "Código do 2DS ativado!" : "Código do 2DS desativado!",
      );

      atualizarFiltros();

      digitado.length = 0;
    }

    // O Trio
    if (texto.includes(codigo2.join(""))) {
      ativado2 = !ativado2;

      mostrarToast(
        ativado2 ? "Código do O Trio ativado!" : "Código do O Trio desativado!",
      );

      membros.forEach((membro, i) => {
        const info = membro.querySelector(".membro-info p");

        info.textContent = ativado2 ? membro.dataset.frase : textosOriginais[i];
      });

      digitado.length = 0;
    }

    // Luiz
    if (texto.includes(codigo3.join(""))) {
      ativado3 = !ativado3;

      mostrarToast(
        ativado3 ? "Código do Luiz ativado!" : "Código do Luiz desativado!",
      );

      document.body.style.transition = "transform 0.6s ease";
      document.body.style.transform = ativado3
        ? "rotate(180deg)"
        : "rotate(0deg)";

      if (ativado3) {
        setTimeout(() => {
          mostrarToast("Sakasama Yokoshima Happō Fusagari.");
        }, 700);
      }

      digitado.length = 0;
    }

    // Viviane
    if (texto.includes(codigo4.join(""))) {
      ativado4 = !ativado4;

      mostrarToast(
        ativado4
          ? "Código da Viviane ativado!"
          : "Código da Viviane desativado!",
      );

      digitado.length = 0;
    }

    // Gustavo
    if (texto.includes(codigo5.join(""))) {
      if (!ativado5) {
        mostrarToast("Código do Gustavo ativado!");

        ativado5 = true;

        const som = new Audio("/za_warudo.mp3");
        som.play();

        timerEscalaDeCinza = setTimeout(() => {
          atualizarFiltros();
        }, 4000);
      } else {
        mostrarToast("Código do Gustavo desativado!");

        ativado5 = false;

        clearTimeout(timerEscalaDeCinza);

        atualizarFiltros();
      }

      digitado.length = 0;
    }

    // Aster
    if (texto.includes(codigo6.join(""))) {
      ativado6 = !ativado6;

      mostrarToast(
        ativado6 ? "Código do Aster ativado!" : "Código do Aster desativado!",
      );

      digitado.length = 0;
    }
  });
}
