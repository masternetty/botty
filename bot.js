
const botPopup = document.createElement('div');
botPopup.style.position = 'fixed';
botPopup.style.bottom = '20px';
botPopup.style.right = '20px';
botPopup.style.background = '#000';
botPopup.style.border = '2px solid #e60000';
botPopup.style.borderRadius = '12px';
botPopup.style.width = '300px';
botPopup.style.height = '400px';
botPopup.style.display = 'flex';
botPopup.style.flexDirection = 'column';
botPopup.style.overflow = 'hidden';
botPopup.style.zIndex = '9999';
botPopup.innerHTML = `
  <div style="background: #e60000; padding: 10px; color: white; display: flex; justify-content: space-between; align-items: center;">
    <span>👨‍💻 MASTER NET</span>
    <button id="closeBot" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer;">×</button>
  </div>
  <div id="chat" style="flex: 1; padding: 10px; overflow-y: auto; background: #111;"></div>
  <form id="formBot" style="display: flex; border-top: 1px solid #e60000;">
    <input type="text" id="inputBot" placeholder="Digite sua dúvida..." style="flex: 1; padding: 10px; border: none; background: #222; color: white;" required>
    <button type="submit" style="padding: 10px; background: #e60000; border: none; color: white;">Enviar</button>
  </form>
`;
document.body.appendChild(botPopup);

document.getElementById('closeBot').onclick = () => botPopup.remove();

function botReply(message) {
  const chat = document.getElementById('chat');
  const userMessage = `<div style="margin-bottom: 10px; text-align: right;"><div style="display: inline-block; background: #e60000; padding: 8px 12px; border-radius: 12px; color: white;">${message}</div></div>`;
  chat.innerHTML += userMessage;

  setTimeout(() => {
    let reply = "";
    const msg = message.toLowerCase();

    if (msg.includes('onde') || msg.includes('quais aparelhos') || msg.includes('smart tv')) {
      reply = "Funciona em Smart TV, Box Android, Celular, Computador e Notebook.";
    } else if (msg.includes('teste grátis') || msg.includes('teste') || msg.includes('posso testar')) {
      reply = "Oferecemos teste grátis por 24h! Clique aqui para solicitar.";
    } else if (msg.includes('pagar') || msg.includes('cartão') || msg.includes('pix') || msg.includes('formas de pagamento')) {
      reply = "Aceitamos PIX, Cartão de Crédito e Débito.";
    } else if (msg.includes('notebook')) {
      reply = "Sim! Nosso serviço funciona no Notebook ou qualquer dispositivo conectado.";
    } else {
      reply = `Desculpe, não consegui resolver sua dúvida.<br><a href="https://wa.me/5519996804873?text=${encodeURIComponent(message)}" style="color: #00ff00;">Clique aqui para falar com nosso suporte!</a>`;
    }

    const botMessage = `<div style="margin-bottom: 10px; text-align: left; display: flex; align-items: flex-start;"><img src="public/logo-bot.png" style="width: 30px; height: 30px; border-radius: 50%; margin-right: 8px;"> <div style="background: #333; padding: 8px 12px; border-radius: 12px; color: white;">${reply}</div></div>`;
    chat.innerHTML += botMessage;
    chat.scrollTop = chat.scrollHeight;
  }, 500);
}

document.getElementById('formBot').onsubmit = (e) => {
  e.preventDefault();
  const input = document.getElementById('inputBot');
  botReply(input.value);
  input.value = '';
};
