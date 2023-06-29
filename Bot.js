// Chatbot logic
function chatbotMessage(userMessage) {
  // Your chatbot logic goes here
  // You can process the userMessage and generate a response
  
  // Example: Echo the user's message
  return `You said: ${userMessage}`;
}

// DOM elements
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Event listener for send button click
sendBtn.addEventListener("click", () => {
  sendMessage();
});

// Event listener for user pressing Enter key
userInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Function to send user message and display bot response
function sendMessage() {
  const userMessage = userInput.value;
  displayMessage(userMessage, "user");

  // Generate bot response
  const botResponse = chatbotMessage(userMessage);
  displayMessage(botResponse, "bot");

  // Clear user input
  userInput.value = "";
}

// Function to display messages in the chat log
function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender);
  messageElement.innerText = message;
  chatLog.appendChild(messageElement);
}
