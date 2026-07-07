// Seleciona os elementos do DOM
const botao = document.getElementById('btn-acao');
const statusTexto = document.getElementById('status');

// Adiciona o evento de clique
botao.addEventListener('click', () => {
  // Altera o texto de status
  statusTexto.innerText = "🚀 Código executado com sucesso!";
  statusTexto.style.color = "#47cf73";
  
  // Cria um efeito confete simples no console
  console.log("Botão clicado! O JavaScript está funcionando perfeitamente.");
});