import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/suivi.css';

export default function Suivi() {
  const [minutesLeft, setMinutesLeft] = useState(15);
  const [progressWidth, setProgressWidth] = useState('0%');
  const fillRef = useRef(null);

  /* Animate progress bar on mount */
  useEffect(() => {
    const timer = setTimeout(() => setProgressWidth('66%'), 600);
    return () => clearTimeout(timer);
  }, []);

  /* Delivery countdown (every 60s for real, but demo at 60s) */
  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesLeft(prev => {
        if (prev <= 0) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* En-tête */}
      <section className="suivi-header">
        <h1 className="suivi-title">Suivi de Livraison</h1>
        <p className="suivi-sub">Suivez vos commandes en temps réel</p>
      </section>

      {/* Contenu principal */}
      <main className="suivi-main">

        {/* Commande en cours */}
        <section className="section-block">
          <h2 className="section-title">Commandes en Cours</h2>

          <div className="order-card active-order">
            {/* En-tête de la commande */}
            <div className="order-card-header">
              <div>
                <div className="order-label">Commande</div>
                <div className="order-id">CMD-2026-001</div>
                <div className="order-time">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Temps estimé : <strong>{minutesLeft > 0 ? `${minutesLeft} min` : 'Livraison imminente !'}</strong>
                </div>
              </div>
              <div className="status-badge">
                <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                En Livraison
              </div>
            </div>

            {/* Barre de progression */}
            <div className="progress-wrap">
              <div className="progress-line">
                <div className="progress-line-fill" ref={fillRef} style={{ width: progressWidth }} />
              </div>

              <div className="steps-row">
                <div className="step-item done">
                  <div className="step-circle">✓</div>
                  <div className="step-label">Préparation</div>
                </div>
                <div className="step-item done">
                  <div className="step-circle">✓</div>
                  <div className="step-label">Prêt</div>
                </div>
                <div className="step-item current">
                  <div className="step-circle">3</div>
                  <div className="step-label">En Route</div>
                </div>
                <div className="step-item">
                  <div className="step-circle">4</div>
                  <div className="step-label">Livré</div>
                </div>
              </div>
            </div>

            {/* Détails de la commande */}
            <div className="order-details-grid">
              <div className="detail-block">
                <div className="detail-title">Articles Commandés</div>
                <ul className="articles-list">
                  <li>Jus Tropical</li>
                  <li>Smoothie Berry</li>
                  <li>Glace Vanille</li>
                </ul>
                <div className="order-total">Total : <strong>9 700 FC</strong></div>
              </div>

              <div className="detail-block">
                <div className="detail-title">Adresse de Livraison</div>
                <div className="address-row">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  123 Avenue Kasa-Vubu, Kinshasa
                </div>

                <div className="livreur-card">
                  <div className="livreur-header">
                    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Votre Livreur
                  </div>
                  <div className="livreur-name">Jean Mukendi</div>
                  <div className="livreur-phone">+243 123 456 789</div>
                  <div className="livreur-distance">
                    <span className="dot-red">📍</span>
                    À 2 km de votre position
                  </div>
                </div>
              </div>
            </div>

            {/* Carte de suivi placeholder */}
            <div className="map-placeholder">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <p className="map-title">Carte de suivi en temps réel</p>
              <p className="map-sub">Votre livreur arrive bientôt</p>
            </div>
          </div>
        </section>

        {/* Commandes récentes */}
        <section className="section-block">
          <h2 className="section-title">Commandes Récentes</h2>

          <div className="recent-card">
            <div className="recent-left">
              <div className="recent-id">CMD-2026-002</div>
              <div className="recent-address">456 Boulevard Lumumba, Kinshasa</div>
              <div className="recent-items">Salade Tropicale, Jus d'Orange</div>
            </div>
            <div className="recent-right">
              <div className="badge-livre">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Livré
              </div>
              <div className="recent-price">6 200 FC</div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
