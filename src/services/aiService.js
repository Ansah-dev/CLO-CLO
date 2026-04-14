import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '../config/secrets';

/* =====================================================================
   AI Chat Service (Gemini Integration + Mock Fallback)
   Description: This service intercepts user messages and sends them to Gemini 
   using a hardcoded key. If no key is set yet, it falls back to a mock. 
===================================================================== */

const SYSTEM_PROMPT = `You are the 'Smart Concierge' for a fast-food and drink restaurant called 'CLO-CLO'.
Your tone is incredibly friendly, enthusiastic, highly polite, and uses emojis appropriately.
Your primary goal is to help customers, recommend menu items, and upsell the Tropical Smoothie.
Key Information:
- Tropical Smoothie (Mango, Pineapple, Passionfruit) costs 3,500 FC. It's refreshing for warm weather.
- We have a variety of fast food.
Keep your answers brief and concise. Under 4 sentences. If they want to order, tell them to use the Cart icon.`;

export const sendToAi = async (messageText, history) => {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
    // Fallback to Mock
    const delay = Math.floor(Math.random() * 1500) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(generateMockResponse(messageText, history));
      }, delay);
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT
    });

    // Format history for Gemini. 
    // We only pass previous roles (user/model)
    const formattedHistory = history.map(h => ({
      role: h.role === 'ai' ? 'model' : 'user',
      parts: [{ text: h.content }]
    }));

    const chatSession = model.startChat({
      history: formattedHistory,
    });

    const result = await chatSession.sendMessage([{text: messageText}]);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! 😅 I'm having a little trouble connecting right now. Please try again in a moment!";
  }
};

function generateMockResponse(msg, history) {
  const text = msg.toLowerCase();

  // Basic NLP rules to mimic intelligence
  if (text.includes("hello") || text.includes("bonjour") || text.includes("salut")) {
    return "Bonjour ! 👋 I'm your Clo-Clo Smart Concierge (Mock Mode). How can I refresh your day?";
  }
  
  if (text.includes("menu") || text.includes("carte") || text.includes("recommendation") || text.includes("recommande")) {
    return "We have an amazing selection today! 🔥 Since it's quite warm, I highly recommend our **Smoothie Tropical** for 3,500 FC. Would you like me to add it to your order?";
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

  return "That sounds delicious! 😋 (Placeholder mock response pending real API key).";
}
