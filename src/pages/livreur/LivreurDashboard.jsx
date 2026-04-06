import React from 'react';

export default function LivreurDashboard() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Tableau de Bord</h1>
        <p className="page-sub">Gérez vos livraisons en temps réel</p>
      </div>

      <div className="stats-grid stats-grid-4">
        <div className="stat-card">
          <div className="stat-icon-box" style={{background:'#eff6ff'}}>📦</div>
          <div><div className="stat-label">Livraisons Aujourd'hui</div><div className="stat-value">12</div></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box" style={{background:'#dcfce7'}}>📈</div>
          <div><div className="stat-label">Gains Aujourd'hui</div><div className="stat-value val-green">45 000 FC</div></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box" style={{background:'#fffbeb'}}>⭐</div>
          <div><div className="stat-label">Note Moyenne</div><div className="stat-value val-yellow">4.8</div></div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-box" style={{background:'#f3e8ff'}}>⏱️</div>
          <div><div className="stat-label">Temps Moyen</div><div className="stat-value val-purple">22 min</div></div>
        </div>
      </div>

      <h2 style={{ fontSize:'1.2rem', fontWeight:800, color:'var(--text-dark)', marginBottom:'16px' }}>Livraison Active</h2>

      <div className="delivery-card">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'16px' }}>
          <div>
            <div className="dc-label">Livraison en cours</div>
            <div className="dc-id">DEL-001</div>
            <div className="dc-cmd">Commande : CMD-2026-048</div>
          </div>
          <div className="dc-timer">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div className="dc-timer-val">15 min</div>
            <div className="dc-timer-label">Temps estimé</div>
          </div>
        </div>

        <div className="dc-meta-grid">
          <div className="dc-meta-item">
            <div className="dc-meta-label"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Distance</div>
            <div className="dc-meta-val">3.2 km</div>
          </div>
          <div className="dc-meta-item">
            <div className="dc-meta-label"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Montant</div>
            <div className="dc-meta-val">10 000 FC</div>
          </div>
          <div className="dc-meta-item">
            <div className="dc-meta-label"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8"/></svg> Articles</div>
            <div className="dc-meta-val">3 articles</div>
          </div>
        </div>

        <div className="dc-body">
          <div>
            <div className="dc-body-title"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Adresse de Livraison</div>
            <div className="dc-client-name">Marie Kambale</div>
            <div className="dc-client-addr">456 Avenue Kasa-Vubu, Kinshasa</div>
            <button className="btn-accept" style={{ width:'auto', padding:'9px 18px', fontSize:'0.85rem', display:'flex', alignItems:'center', gap:'6px' }}>
              <svg style={{ width:'15px', height:'15px', stroke:'white', fill:'none', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' }} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg>
              Appeler le Client
            </button>
          </div>
          <div>
            <div className="dc-body-title"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8"/></svg>Articles à Livrer</div>
            <ul className="dc-articles-list">
              <li><div className="num">1</div> Smoothie Tropical</li>
              <li><div className="num">2</div> Glace Vanille</li>
              <li><div className="num">3</div> Jus d'Orange</li>
            </ul>
          </div>
        </div>

        <div className="dc-actions" style={{ marginTop:'16px' }}>
          <button className="btn-nav">Voir les Détails et la Navigation</button>
          <button className="btn-dark">Marquer comme Livré</button>
        </div>
      </div>

      <div className="nouvelle-header">
        <div className="nouvelle-title">Nouvelles Demandes de Livraison</div>
        <div className="badge-nouvelle"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>1 nouvelle</div>
      </div>

      <div className="demande-card">
        <div className="demande-header">
          <div>
            <div className="demande-label">Nouvelle Demande</div>
            <div className="demande-id">DEL-002</div>
            <div className="demande-stats">
              <div className="demande-stat"><div className="demande-stat-label">Distance</div><div className="demande-stat-val">2.8 km</div></div>
              <div className="demande-stat"><div className="demande-stat-label">Gain estimé</div><div className="demande-stat-val">1 155 FC</div></div>
            </div>
          </div>
          <div className="demande-timer">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div className="demande-timer-val">12 min</div>
          </div>
        </div>
        <div className="demande-body">
          <div className="demande-dest-title"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Destination</div>
          <div className="demande-dest-name">Pierre Kabongo</div>
          <div className="demande-dest-addr">123 Boulevard Lumumba, Kinshasa</div>
          <div className="demande-articles-title">Articles (2)</div>
          <div className="article-chips"><span className="article-chip">Salade de Fruits</span><span className="article-chip">Smoothie Berry</span></div>
          <div className="demande-actions">
            <button className="btn-accept">Accepter</button>
            <button className="btn-refuse">Refuser</button>
          </div>
        </div>
      </div>
    </>
  );
}
