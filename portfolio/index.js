
// ========================================
// CONFIGURAÇÕES
// ========================================

// Coloque seu e-mail profissional aqui.
const emailContato = "";

// ========================================
// ATUALIZAR ANO AUTOMATICAMENTE
// ========================================

function atualizarAno() {
  const elementoAno = document.getElementById("ano");

  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
}

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

function configurarFormulario() {
  const formulario = document.getElementById("formulario-contato");
  const status = document.getElementById("status-formulario");

  if (!formulario || !status) return;

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.reportValidity()) return;

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      status.textContent = "Preencha todos os campos.";
      return;
    }

    if (!emailContato.trim()) {
      status.textContent =
        "O e-mail de contato ainda precisa ser configurado.";
      return;
    }

    const assunto = encodeURIComponent(
      `Contato pelo portfólio - ${nome}`
    );

    const corpo = encodeURIComponent(
      `Nome: ${nome}\n` +
      `E-mail: ${email}\n\n` +
      `Mensagem:\n${mensagem}`
    );

    const linkEmail =
      `mailto:${emailContato}?subject=${assunto}&body=${corpo}`;

    window.location.href = linkEmail;

    status.textContent =
      "O aplicativo de e-mail será aberto. Confirme o envio da mensagem.";
  });
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  atualizarAno();
  configurarFormulario();
});
