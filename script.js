const botPergunta = document.getElementById("botPergunta");
const botEnviar = document.getElementById("botEnviar");
const botResposta = document.getElementById("botResposta");
const chatBot = document.getElementById("chatbot");
const openChatBot = document.getElementById("open-chatbot");
const chatContent = document.getElementById("chat-content");

openChatBot.onclick = () => {
  if (chatBot.style.display === "none") {
    chatBot.style.display = "block";
    new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_0f6b75a9b4.mp3?filename=button-click-124467.mp3").play();
  } else {
    chatBot.style.display = "none";
  }
};

botEnviar.onclick = () => {
  const pergunta = botPergunta.value.toLowerCase();
  let resposta = "🤖 Não entendi. Fale com nosso suporte via WhatsApp.";

  if (pergunta.includes("onde") || pergunta.includes("aparelho") || pergunta.includes("smart")) {
    resposta = "📱 Funciona em Celular, TV Smart, TV Box, Tablet e PC.";
  } else if (pergunta.includes("teste") || pergunta.includes("posso testar")) {
    resposta = "🎁 Temos TESTE GRÁTIS! Clique no botão ou fale no WhatsApp.";
  } else if (pergunta.includes("pagar") || pergunta.includes("cartão") || pergunta.includes("pix") || pergunta.includes("formas de pagamento")) {
    resposta = "💳 Aceitamos PIX e Cartão de Crédito.";
  }

  chatContent.innerHTML += `<p><strong>Você:</strong> ${pergunta}</p><p><strong>Bot:</strong> ${resposta}</p>`;
};