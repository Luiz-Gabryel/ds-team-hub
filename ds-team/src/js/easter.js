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

  const digitado = [];

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
    if (texto.includes(codigo1.join(""))) {
      if (!ativado1) {
        mostrarToast("Código do 2DS ativado!");
        ativado1 = true;
        document.body.style.filter = "invert(1)";
      } else {
        mostrarToast("Código do 2DS desativado!");
        ativado1 = false;
        document.body.style.filter = "";
      }

      digitado.length = 0;
    }

    if (texto.includes(codigo2.join(""))) {
      if (!ativado2) {
        mostrarToast("Código do O Trio ativado!");
        ativado2 = true;

        membros.forEach((membro) => {
          const info = membro.querySelector(".membro-info p");
          info.textContent = membro.dataset.frase;
        });
      } else {
        mostrarToast("Código do O Trio desativado!");
        ativado2 = false;

        membros.forEach((membro, i) => {
          const info = membro.querySelector(".membro-info p");
          info.textContent = textosOriginais[i];
        });
      }

      digitado.length = 0;
    }
    if (texto.includes(codigo3.join(""))) {
      if (!ativado3) {
        mostrarToast("Código do Luiz ativado!");
        ativado3 = true;
        setTimeout(() => {
          document.body.style.transform = 'rotate(180deg)';
        alert("Sakasama Yokoshima Happō Fusagari.")
      }, 3000);
        
      } else {
        mostrarToast("Código do Luiz desativado!");
        ativado3 = false;
      }

      digitado.length = 0;
    }

    if (texto.includes(codigo4.join(""))) {
      if (!ativado4) {
        mostrarToast("Código da Viviane ativado!");
        ativado4 = true;
      } else {
        mostrarToast("Código da Viviane desativado!");
        ativado4 = false;
      }

      digitado.length = 0;
    }

    if (texto.includes(codigo5.join(""))) {
      if (!ativado5) {
        mostrarToast("Código do Gustavo ativado!");
        ativado5 = true;
      } else {
        mostrarToast("Código do Gustavo desativado!");
        ativado5 = false;
      }

      digitado.length = 0;
    }

    if (texto.includes(codigo6.join(""))) {
      if (!ativado6) {
        mostrarToast("Código do Aster ativado!");
        ativado6 = true;
      } else {
        mostrarToast("Código do Aster desativado!");
        ativado6 = false;
      }

      digitado.length = 0;
    }
  });
}
