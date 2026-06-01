// Formulário de Cadastro
  const formCadastro = document.getElementById("formCadastro");
  const mensagemSucesso = document.getElementById("mensagemSucesso");
  const whatsappNumberCadastro = "5592999095226";

  if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome")?.value.trim() || "";
      const empresa = document.getElementById("empresa")?.value.trim() || "";
      const whatsapp = document.getElementById("whatsApp")?.value.trim() || "";
      const segmento = document.getElementById("segmento")?.value.trim() || "";
      const origem = document.getElementById("origem")?.value.trim() || "";

      if (!nome || !empresa || !whatsapp || !segmento ) {
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
      WhatsApp: ${whatsapp}
      Segmento: ${segmento}
      Origem: ${origem || "Não informado"}`;

      mensagemSucesso?.classList.add("ativa");

      const url = `https://wa.me/${whatsappNumberCadastro}?text=${encodeURIComponent(text)}`;

      setTimeout(() => {
        window.location.href = url;
      }, 1500);
    });
  }