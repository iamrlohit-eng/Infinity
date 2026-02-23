function toggleChat() {
  const popup = document.getElementById("chatbot-popup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

document.getElementById("chatbot-btn").onclick = toggleChat;

function sendMessage(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chat-input");
    const chat = document.getElementById("chat-body");

    if (input.value.trim() === "") return;

    chat.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
    chat.innerHTML += `<p><strong>Infinity:</strong> I'm learning. AI reply coming soon 🚀</p>`;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  }
}