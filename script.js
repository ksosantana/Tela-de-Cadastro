// Menu Lateral
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menuLateral = document.getElementById("menuLateral");
  const menuItems = document.querySelectorAll(".menu-item");
  const btnSuporte = document.getElementById("btnSuporte");
  const whatsappEmpresa = "55929924995441";

  function fecharMenu() {
    menuToggle?.classList.remove("ativo");
    menuLateral?.classList.remove("ativo");
  }

  // Abrir/fechar SOMENTE pelo botão hambúrguer
  if (menuToggle && menuLateral) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();

      menuToggle.classList.toggle("ativo");
      menuLateral.classList.toggle("ativo");
    });

    // Evita fechar ao clicar dentro do menu
    menuLateral.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    // Fecha ao clicar fora
    document.addEventListener("click", function () {
      if (menuLateral.classList.contains("ativo")) {
        fecharMenu();
      }
    });
  }

  // Fechar menu ao clicar em um item
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      fecharMenu();
    });
  });

  // Suporte - WhatsApp
  if (btnSuporte) {
    btnSuporte.addEventListener("click", function (e) {
      e.preventDefault();

      const mensagem = "Preciso de suporte";
      const url = `https://wa.me/${whatsappEmpresa}?text=${encodeURIComponent(mensagem)}`;

      window.open(url, "_blank");
      fecharMenu();
    });
  }

  // Formulário de Cadastro
  const formCadastro = document.getElementById("formCadastro");
  const mensagemSucesso = document.getElementById("mensagemSucesso");
  const whatsappNumberCadastro = "5592999095226";

  if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome")?.value.trim() || "";
      const empresa = document.getElementById("empresa")?.value.trim() || "";
      const segmento = document.getElementById("segmento")?.value.trim() || "";
      const origem = document.getElementById("origem")?.value.trim() || "";

      if (!nome || !empresa || !segmento) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      if (mensagemSucesso) {
        mensagemSucesso.innerHTML = `
          <h2>Cadastro quase conlcuido!</h2>
          <p>Para agilizar, vamos de redirecionar para o WhatsApp.</p>
        `;
      }

      formCadastro.style.display = "none";
      mensagemSucesso?.classList.add("ativa");

      const text = `*Realizei o cadastro inicial.*

      Nome: ${nome}
      Empresa: ${empresa}
      Segmento: ${segmento}
      Origem: ${origem || "Não informado"}`;

      mensagemSucesso?.classList.add("ativa");

      const url = `https://wa.me/${whatsappNumberCadastro}?text=${encodeURIComponent(text)}`;

      setTimeout(() => {
        window.location.href = url;
      }, 1500);
    });
  }
});