import React from 'react';

export default function LivreurLivraison() {
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
    </>
  );
}
