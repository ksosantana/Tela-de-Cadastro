document.addEventListener('DOMContentLoaded', function() {
  const formCadastro = document.getElementById('formCadastro');
  const mensagemSucesso = document.getElementById('mensagemSucesso');
  const whatsappNumber = '5592999095226';

  if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome')?.value.trim() || '';
      const empresa = document.getElementById('empresa')?.value.trim() || '';
      const segmento = document.getElementById('segmento')?.value.trim() || '';
      const origem = document.getElementById('origem')?.value.trim() || '';

      // Atualiza mensagem para o usuário
      if (mensagemSucesso) {
        mensagemSucesso.innerHTML = '<h2>Realizei o cadastro inicial.</h2>' 
      }

      // Ocultar o formulário e mostrar a mensagem
      formCadastro.style.display = 'none';
      mensagemSucesso?.classList.add('ativa');

      // Monta mensagem para o WhatsApp com dados do formulário
      const text = `*Realizei o cadastro inicial.* \nNome: ${nome}\nEmpresa: ${empresa}\nSegmento: ${segmento}\nOrigem: ${origem}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      // Redireciona para o WhatsApp após 1,5s (mostra a mensagem brevemente)
      setTimeout(() => {
        window.location.href = url;
      }, 1500);
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