import React, { useState, useRef, useEffect } from 'react';
import '../../assets/styles/chat.css';
import { sendToAi } from '../../services/aiService';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Bonjour ! 👋 I'm your Clo-Clo Smart Concierge. Are you craving something cold today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { role: 'user', content: inputValue.trim() };
    const currentMessages = [...messages, userMessage];
    
    setMessages(currentMessages);
    setInputValue('');
    setIsTyping(true);

    // Call the AI Service
    const aiResponseContent = await sendToAi(userMessage.content, currentMessages);
    
    setIsTyping(false);
    setMessages([...currentMessages, { role: 'ai', content: aiResponseContent }]);
  };

  return (
    <div className="chat-widget-container">
      
      {/* The Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-icon">🤖</div>
          <div className="chat-header-info">
            <div className="chat-header-title">Smart Concierge</div>
            <div className="chat-header-sub"><span className="dot-online"></span> Always online</div>
          </div>
          <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }} onClick={toggleChat}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg-wrapper msg-${msg.role}`}>
              <div className="msg-bubble">
                {msg.content.split('**').map((chunk, i) => i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk)}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="msg-wrapper msg-ai">
              <div className="msg-bubble typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {isOpen && (
          <div className="chat-chips-container">
            <button type="button" className="chat-chip" onClick={() => setInputValue("Qu'est-ce que tu recommandes ?")}>Recommandation</button>
            <button type="button" className="chat-chip" onClick={() => setInputValue("Où est ma livraison ?")}>Suivi Commande</button>
            <button type="button" className="chat-chip" onClick={() => setInputValue("Je veux un Smoothie Tropical")}>Smoothie Tropical</button>
          </div>
        )}

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            className="chat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Demandez une recommandation..."
          />
          <button type="submit" className="chat-input-btn" disabled={!inputValue.trim() || isTyping}>
            <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          </button>
        </form>
      </div>

      {/* Floating Toggle Button */}
      <button className="chat-toggle-btn" onClick={toggleChat}>
        {isOpen ? (
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

    </div>
  );
}
