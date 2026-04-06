/* =====================================================================
   AI Chat Service (Mock/Simulated)
   Description: This service intercepts user messages and simulates
   intelligent responses based on basic NLP keywords. 
   
   TODO: Replace with actual OpenAI or Anthropic API integration.
===================================================================== */

export const sendToAi = async (messageText, history) => {
  // Simulate network latency (between 1s to 2.5s)
  const delay = Math.floor(Math.random() * 1500) + 1000;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockResponse(messageText, history));
    }, delay);
  });
};

function generateMockResponse(msg, history) {
  const text = msg.toLowerCase();

  // Basic NLP rules to mimic intelligence
  if (text.includes("hello") || text.includes("bonjour") || text.includes("salut")) {
    return "Bonjour ! 👋 I'm your Clo-Clo Smart Concierge. How can I refresh your day? You can ask me for recommendations or help with your order.";
  }
  
  if (text.includes("menu") || text.includes("carte") || text.includes("recommendation") || text.includes("recommande")) {
    return "We have an amazing selection today! 🔥 Since it's quite warm, I highly recommend our **Smoothie Tropical** (Mango, Pineapple, Passionfruit) for 3,500 FC. Would you like me to add it to your order?";
  }

  if (text.includes("smoothie") || text.includes("jus")) {
    return "Great choice! The Tropical Smoothie is our best-seller. Should I get 1 or 2 glasses for you right now?";
  }

  if (text.includes("oui") || text.includes("yes") || text.includes("order") || text.includes("commander")) {
    return "Perfect! 🍹 I've noted that down. You can seamlessly complete your order by clicking the Cart icon. Let me know if you need any other drinks or snacks!";
  }

  if (text.includes("livraison") || text.includes("delivery") || text.includes("where") || text.includes("suivi")) {
    return "You can track your active deliveries directly on our 'Suivi de Commande' page. Generally, our drivers arrive within 20-30 minutes! 🛵💨";
  }

  if (text.includes("merci") || text.includes("thank")) {
    return "You're very welcome! Let me know if there's anything else I can do for you. Enjoy your Clo-Clo! ❤️";
  }

  // Fallback
  return "That sounds delicious! 😋 I'm still learning, but if you want to order something, just tell me what you're craving (like 'I want a tropical smoothie') and I'll help you out!";
}
