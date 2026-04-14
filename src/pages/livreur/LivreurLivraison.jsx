import React, { useState, useRef } from 'react';

export default function LivreurLivraison() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  // Initialize Speech Recognition
  const initSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Votre navigateur ne supporte pas la reconnaissance vocale.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('Écoute en cours...');
    };

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      handleVoiceCommand(speechToText.toLowerCase());
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
      setTranscript('Erreur: ' + event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
      setTimeout(() => setTranscript(''), 3000); 
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const speakResponse = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'fr-FR';
    window.speechSynthesis.speak(speech);
  };

  const handleVoiceCommand = (command) => {
    if (command.includes('prochain') || command.includes('arrêt') || command.includes('destination')) {
      speakResponse("Votre prochain arrêt est à 456 Avenue Kasa-Vubu. C'est pour la commande de Marie Kambale.");
    } else if (command.includes('appeler') || command.includes('client')) {
      speakResponse("J'appelle Marie Kambale au +243 987 654 321.");
      // In a real app, this would trigger window.open('tel:...')
    } else {
      speakResponse("Je n'ai pas bien compris. Vous pouvez me demander votre prochaine destination.");
    }
  };

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Livraison en Cours</h1>
        <p className="page-sub">Suivez votre livraison et naviguez vers le client</p>
      </div>

      <div className="nav-banner">
        <div className="nav-banner-left">
          <div className="nav-banner-icon"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
          <div>
            <div className="nav-banner-title">Navigation Active</div>
            <div className="nav-banner-sub">Vous êtes en route vers le client</div>
          </div>
          <div style={{ marginLeft: '20px', fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>3.2 km • 8 min</div>
        </div>
        <div className="dc-timer">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <div className="dc-timer-val">8 min</div>
          <div className="dc-timer-label">Temps restant</div>
        </div>
      </div>

      <div className="progression-card">
        <div className="progression-title">Progression de la Livraison</div>
        <div className="prog-steps">
          <div className="prog-line-bg"><div className="prog-line-fill" style={{ width: '66%' }}></div></div>
          <div className="prog-row">
            <div className="prog-step"><div className="prog-circle done">✓</div><div className="prog-label done">Récupérée</div></div>
            <div className="prog-step"><div className="prog-circle current">✓</div><div className="prog-label current">En Route</div></div>
            <div className="prog-step"><div className="prog-circle">3</div><div className="prog-label">Arrivée</div></div>
          </div>
        </div>
        <div className="prog-btns" style={{ marginTop: '8px' }}>
          <button className="prog-btn">Commande Récupérée</button>
          <button className="prog-btn active">En Route</button>
          <button className="prog-btn">J'arrive</button>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <div style={{ background: '#3b82f6', borderRadius: '14px', padding: '16px 18px', marginBottom: '16px' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'white', marginBottom: '4px' }}>Navigation GPS</div>
            <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>3.2 km • 8 min</div>
          </div>
          <div className="map-area">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <p>Carte Interactive</p>
            <small>Navigation GPS en temps réel</small>
          </div>
          <div className="nav-instruction"><span className="dot dot-blue"></span>Dans 200m, tournez à droite</div>
          <div className="nav-instruction"><span className="dot dot-red"></span>Destination : 3.2 km</div>
          <button className="btn-gmaps">
            <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Ouvrir dans Google Maps
          </button>
        </div>

        <div>
          <div className="card" style={{ marginBottom: '16px' }}>
            <div className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg style={{ width: '18px', height: '18px', stroke: 'var(--green)', fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Informations Client
            </div>
            <div className="info-field"><div className="info-label">Nom</div><div className="info-value">Marie Kambale</div></div>
            <div className="info-field"><div className="info-label">Adresse</div><div className="info-value">456 Avenue Kasa-Vubu, Kinshasa</div></div>
            <div className="info-field"><div className="info-label">Téléphone</div><div className="info-value info-phone">+243 987 654 321</div></div>
            <div className="instructions-banner">
              <div className="instructions-title">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Instructions spéciales
              </div>
              <div className="instructions-text">Sonner à l'appartement 4B, 2ème étage</div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Articles à Livrer</div>
            <ul className="articles-full-list">
              <li><div className="art-num">1</div><div className="art-name">Smoothie Tropical</div><div className="art-check"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div></li>
              <li><div className="art-num">2</div><div className="art-name">Glace Vanille</div><div className="art-check"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div></li>
              <li><div className="art-num">3</div><div className="art-name">Jus d'Orange</div><div className="art-check"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div></li>
            </ul>
            <div className="art-total"><span>Montant Total</span><span>10 000 FC</span></div>

            <div className="actions-rapides">
              <div className="ar-title">Actions Rapides</div>
              <button className="btn-appeler">
                <svg className="btn-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg>
                Appeler le Client
              </button>
              <button className="btn-signaler">
                <svg className="btn-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Signaler un Problème
              </button>
              <button className="btn-livre" id="btn-livre">
                <svg className="btn-icon" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Marquer comme Livré
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Copilot UI Overlay */}
      {transcript && (
        <div style={{ position: 'fixed', bottom: '100px', right: '30px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '12px 20px', borderRadius: '12px', zIndex: 1000, maxWidth: '250px', backdropFilter: 'blur(8px)', animation: 'slideUpFade 0.3s' }}>
          <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '4px' }}>🎙️ Copilot vous a entendu :</div>
          <div style={{ fontWeight: 600 }}>"{transcript}"</div>
        </div>
      )}

      {/* Floating Microphone Button */}
      <button 
        onClick={initSpeechRecognition}
        style={{
          position: 'fixed', bottom: '30px', right: '30px', width: '64px', height: '64px', borderRadius: '50%',
          border: 'none', background: isListening ? '#ef4444' : 'var(--blue)', color: 'white', cursor: 'pointer',
          boxShadow: isListening ? '0 0 0 8px rgba(239, 68, 68, 0.3)' : '0 10px 25px rgba(59, 130, 246, 0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, transition: '0.3s'
        }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      </button>

    </>
  );
}
