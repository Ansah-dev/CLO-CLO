import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/profil.css';

/* ── User data (will be replaced by Supabase in future) ── */
const initialUser = {
  nom: 'Marie Kambale',
  email: 'marie.kambale@email.com',
  tel: '+243 987 654 321',
  adresse: '456 Avenue Kasa-Vubu, Kinshasa',
  points: 350,
  commandes: 24,
  niveau: 'Or',
};

const rewards = [
  { id: 1, name: 'Boisson Gratuite',   desc: 'Un jus ou smoothie de votre choix', cost: 150, available: true  },
  { id: 2, name: 'Réduction 20%',      desc: 'Sur votre prochaine commande',       cost: 100, available: true  },
  { id: 3, name: 'Livraison Gratuite', desc: 'Pour votre prochaine commande',      cost: 50,  available: true  },
  { id: 4, name: 'Menu VIP',           desc: 'Accès aux produits exclusifs',       cost: 500, available: false },
];

const initialHistory = [
  { label: 'Commande #CMD-2026-001', date: '15 Mars 2026', pts: +50,  type: 'gain' },
  { label: 'Bonus de parrainage',    date: '10 Mars 2026', pts: +100, type: 'gain' },
  { label: 'Récompense utilisée',    date: '8 Mars 2026',  pts: -75,  type: 'loss' },
  { label: 'Commande #CMD-2026-002', date: '5 Mars 2026',  pts: +40,  type: 'gain' },
  { label: 'Commande #CMD-2026-003', date: '1 Mars 2026',  pts: +30,  type: 'gain' },
];

/* ── Toast helper ── */
function showToast(message, color = 'green') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '30px', right: '30px',
    background: color === 'red' ? '#ef4444' : '#22c55e',
    color: 'white', padding: '14px 24px', borderRadius: '12px',
    fontFamily: "'Nunito', sans-serif", fontWeight: '700', fontSize: '0.95rem',
    boxShadow: '0 6px 24px rgba(0,0,0,0.2)', zIndex: '9999',
    opacity: '1', transition: 'opacity 0.3s',
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 2500);
}

export default function Profil() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('vue');
  const [user, setUser] = useState(initialUser);
  const [history, setHistory] = useState(initialHistory);
  const [rewardStates, setRewardStates] = useState({});
  const [formData, setFormData] = useState({
    nom: user.nom, email: user.email, tel: user.tel, adresse: user.adresse,
  });
  const levelBarRef = useRef(null);

  /* Animate level bar */
  useEffect(() => {
    if (levelBarRef.current) {
      levelBarRef.current.style.width = '0%';
      setTimeout(() => {
        const pct = Math.min((user.points / 1000) * 100, 100);
        levelBarRef.current.style.width = pct + '%';
      }, 400);
    }
  }, [user.points]);

  /* Scroll reveal for cards */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.stat-card, .reward-card, .histo-item').forEach((el, i) => {
      Object.assign(el.style, {
        opacity: '0', transform: 'translateY(18px)',
        transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
      });
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [activeTab]);

  const handleUseReward = (reward) => {
    if (user.points < reward.cost) {
      showToast(`❌ Points insuffisants ! (${user.points} / ${reward.cost} requis)`, 'red');
      return;
    }
    setUser(prev => ({ ...prev, points: prev.points - reward.cost }));
    setHistory(prev => [
      { label: `Récompense : ${reward.name}`, date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }), pts: -reward.cost, type: 'loss' },
      ...prev,
    ]);
    setRewardStates(prev => ({ ...prev, [reward.id]: true }));
    showToast(`🎉 "${reward.name}" appliqué avec succès !`);
    setTimeout(() => setRewardStates(prev => ({ ...prev, [reward.id]: false })), 2000);
  };

  const handleSave = () => {
    if (!formData.nom || !formData.email) {
      showToast('⚠️ Nom et email sont requis.', 'red');
      return;
    }
    setUser(prev => ({ ...prev, ...formData }));
    showToast('✅ Modifications enregistrées !');
  };

  const handleLogout = () => {
    if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
      showToast('👋 Déconnexion en cours...');
      setTimeout(() => navigate('/'), 1500);
    }
  };

  const tabs = [
    { id: 'vue', label: "Vue d'ensemble", icon: <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { id: 'recompenses', label: 'Récompenses', icon: <svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/><line x1="12" y1="13" x2="12" y2="17"/></svg> },
    { id: 'historique', label: 'Historique', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
    { id: 'parametres', label: 'Paramètres', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
  ];

  return (
    <>
      {/* Bannière profil */}
      <div className="profil-banner">
        <div className="banner-inner">
          <div className="banner-left">
            <div className="avatar">
              <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="banner-info">
              <h1 className="banner-name">{user.nom}</h1>
              <p className="banner-email">{user.email}</p>
              <div className="banner-meta">
                <span className="badge-or">
                  <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Membre {user.niveau}
                </span>
                <span className="banner-cmds">{user.commandes} commandes</span>
              </div>
            </div>
          </div>
          <div className="banner-points-box">
            <div className="bp-label">Vos Points</div>
            <div className="bp-value">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              {user.points}
            </div>
          </div>
        </div>
      </div>

      {/* Onglets */}
      <div className="profil-container">
        <div className="tabs-nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── VUE D'ENSEMBLE ─── */}
        <div className={`tab-content ${activeTab === 'vue' ? 'active' : ''}`}>
          <h2 className="tab-section-title">Progression du Niveau</h2>

          <div className="niveau-card">
            <div className="niveau-top">
              <span className="niveau-actuel">Niveau Actuel : <strong>{user.niveau}</strong></span>
              <span className="niveau-objectif">{user.points} / 1000 points pour Platine</span>
            </div>
            <div className="niveau-bar-bg">
              <div className="niveau-bar-fill" ref={levelBarRef} style={{ width: '0%' }} />
            </div>
            <div className="niveau-tiers">
              <div className="tier tier-done"><div className="tier-name">Bronze</div><div className="tier-pts">0 pts</div></div>
              <div className="tier tier-done"><div className="tier-name">Argent</div><div className="tier-pts">200 pts</div></div>
              <div className="tier tier-active"><div className="tier-name">Or</div><div className="tier-pts">500 pts</div></div>
              <div className="tier"><div className="tier-name">Platine</div><div className="tier-pts">1000 pts</div></div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card stat-blue">
              <div className="stat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <div className="stat-label">Commandes</div>
              <div className="stat-value blue">{user.commandes}</div>
              <div className="stat-sub">Total de commandes</div>
            </div>
            <div className="stat-card stat-yellow">
              <div className="stat-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <div className="stat-label">Points Gagnés</div>
              <div className="stat-value yellow">{user.points}</div>
              <div className="stat-sub">Points disponibles</div>
            </div>
            <div className="stat-card stat-green">
              <div className="stat-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <div className="stat-label">Favori</div>
              <div className="stat-value green">Smoothie Tropical</div>
              <div className="stat-sub">Votre préféré</div>
            </div>
          </div>
        </div>

        {/* ─── RÉCOMPENSES ─── */}
        <div className={`tab-content ${activeTab === 'recompenses' ? 'active' : ''}`}>
          <h2 className="tab-section-title">Récompenses Disponibles</h2>

          <div className="rewards-grid">
            {rewards.map(reward => (
              <div key={reward.id} className={`reward-card ${reward.available ? 'available' : 'locked'}`}>
                <div className="reward-top">
                  <div className="reward-info">
                    <div className="reward-name">{reward.name}</div>
                    <div className="reward-desc">{reward.desc}</div>
                  </div>
                  <svg className={`reward-icon ${!reward.available ? 'locked-icon' : ''}`} viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>
                </div>
                <div className="reward-bottom">
                  <span className={`reward-pts ${!reward.available ? 'locked-pts' : ''}`}>
                    <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    {reward.cost} points
                  </span>
                  {reward.available ? (
                    <button
                      className="btn-utiliser"
                      onClick={() => handleUseReward(reward)}
                      disabled={rewardStates[reward.id]}
                      style={rewardStates[reward.id] ? { background: '#16a34a' } : {}}
                    >
                      {rewardStates[reward.id] ? '✓ Utilisé !' : 'Utiliser'}
                    </button>
                  ) : (
                    <span className="bientot">Bientôt disponible</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── HISTORIQUE ─── */}
        <div className={`tab-content ${activeTab === 'historique' ? 'active' : ''}`}>
          <h2 className="tab-section-title">Historique des Points</h2>

          <div className="historique-list">
            {history.map((item, i) => (
              <div key={i} className="histo-item">
                <div className="histo-left">
                  <div className="histo-name">{item.label}</div>
                  <div className="histo-date">{item.date}</div>
                </div>
                <div className={`histo-pts ${item.type}`}>
                  {item.pts > 0 ? '+' : ''}{item.pts} pts
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PARAMÈTRES ─── */}
        <div className={`tab-content ${activeTab === 'parametres' ? 'active' : ''}`}>
          <h2 className="tab-section-title">Paramètres du Compte</h2>

          <div className="params-form">
            <div className="form-group">
              <label className="form-label">Nom</label>
              <input className="form-input" type="text" value={formData.nom} onChange={e => setFormData(p => ({...p, nom: e.target.value}))} />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} />
            </div>
            <div className="form-group">
              <label className="form-label">Téléphone</label>
              <input className="form-input" type="tel" value={formData.tel} onChange={e => setFormData(p => ({...p, tel: e.target.value}))} />
            </div>
            <div className="form-group">
              <label className="form-label">Adresse</label>
              <input className="form-input" type="text" value={formData.adresse} onChange={e => setFormData(p => ({...p, adresse: e.target.value}))} />
            </div>

            <div className="params-actions">
              <button className="btn-enregistrer" onClick={handleSave}>Enregistrer</button>
              <button className="btn-deconnexion" onClick={handleLogout}>
                <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
