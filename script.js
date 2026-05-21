document.addEventListener('DOMContentLoaded', function() {
  const formCadastro = document.getElementById('formCadastro');
  const mensagemSucesso = document.getElementById('mensagemSucesso');

  if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
      event.preventDefault();

      // Ocultar o formulário
      formCadastro.style.display = 'none';

      // Mostrar a mensagem de sucesso
      mensagemSucesso.classList.add('ativa');
    });
  }
});
const formCadastro = document.getElementById("formCadastro");
const btnVoltar = document.getElementById("btnVoltar");

btnVoltar.addEventListener("click", function () {
  window.history.back();
});

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const empresa = document.getElementById("empresa").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const segmento = document.getElementById("segmento").value.trim();
  const origem = document.getElementById("origem").value.trim();

  if (!nome || !empresa || !whatsapp || !segmento) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const numeroEmpresa = "55929924995441";

  const mensagem = `Olá, acabei de realizar o cadastro.

Nome: ${nome}
Empresa: ${empresa}
WhatsApp: ${whatsapp}
Segmento/Ramo: ${segmento}
Como nos encontrou: ${origem || "Não informado"}`;

  const linkWhatsApp = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(mensagem)}`;

  window.open(linkWhatsApp, "_blank");
});