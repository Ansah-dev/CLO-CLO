import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/styles/connexion.css';
import '../assets/styles/inscription.css';

/* ── Toast helper ── */
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '30px', right: '30px',
    background: '#22c55e', color: 'white', padding: '14px 24px',
    borderRadius: '12px', fontFamily: "'Nunito', sans-serif",
    fontWeight: '700', fontSize: '0.95rem',
    boxShadow: '0 6px 24px rgba(0,0,0,0.2)', zIndex: '9999',
    opacity: '1', transition: 'opacity 0.3s',
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 2500);
}

export default function Inscription() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nom: '', email: '', tel: '', adresse: '', mdp: '', mdp2: '' });
  const [cgu, setCgu] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.nom.trim()) e.nom = 'Le nom est requis.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide.';
    if (!form.tel.trim()) e.tel = 'Le téléphone est requis.';
    if (!form.mdp || form.mdp.length < 6) e.mdp = 'Minimum 6 caractères.';
    if (form.mdp !== form.mdp2) e.mdp2 = 'Les mots de passe ne correspondent pas.';
    if (!cgu) e.cgu = 'Vous devez accepter les conditions.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      showToast('🎉 Compte créé ! 50 points de bienvenue offerts !');
      setTimeout(() => navigate('/profil'), 1800);
    }, 1200);
  };

  return (
    <div className="inscription-page">
      <div className="page-bg">
        <div className="form-card">
          {/* En-tête */}
          <div className="card-header">
            <div className="card-icon card-icon-green">🍹</div>
            <h1 className="card-title">Créer un Compte</h1>
            <p className="card-sub">Rejoignez Clo-Clo et gagnez des points</p>
          </div>

          {/* Avantages */}
          <div className="avantages">
            <div className="avantages-title">Avantages de l'inscription :</div>
            <ul className="avantages-list">
              <li><span>⭐</span> 50 points de bienvenue offerts</li>
              <li><span>🎁</span> Offres exclusives et promotions</li>
              <li><span>📍</span> Suivi de livraison en temps réel</li>
              <li><span>💳</span> Programme de fidélité avec récompenses</li>
            </ul>
          </div>

          {/* Grille de champs */}
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Nom Complet</label>
              <div className={`input-wrap ${errors.nom ? 'error' : ''}`}>
                <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input type="text" placeholder="Jean Dupont" value={form.nom} onChange={e => update('nom', e.target.value)} />
              </div>
              <span className="error-msg">{errors.nom || ''}</span>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <div className={`input-wrap ${errors.email ? 'error' : ''}`}>
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <input type="email" placeholder="jean@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <span className="error-msg">{errors.email || ''}</span>
            </div>

            <div className="form-group">
              <label className="form-label">Téléphone</label>
              <div className={`input-wrap ${errors.tel ? 'error' : ''}`}>
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.53 5.53l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <input type="tel" placeholder="+243 123 456 789" value={form.tel} onChange={e => update('tel', e.target.value)} />
              </div>
              <span className="error-msg">{errors.tel || ''}</span>
            </div>

            <div className="form-group">
              <label className="form-label">Adresse</label>
              <div className="input-wrap">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <input type="text" placeholder="123 Avenue..." value={form.adresse} onChange={e => update('adresse', e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Mot de passe</label>
              <div className={`input-wrap ${errors.mdp ? 'error' : ''}`}>
                <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type={showPwd ? 'text' : 'password'} placeholder="••••••••" value={form.mdp} onChange={e => update('mdp', e.target.value)} />
                <button type="button" className="toggle-pwd" onClick={() => setShowPwd(!showPwd)}>
                  <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
              <span className="error-msg">{errors.mdp || ''}</span>
            </div>

            <div className="form-group">
              <label className="form-label">Confirmer le mot de passe</label>
              <div className={`input-wrap ${errors.mdp2 ? 'error' : ''}`}>
                <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" placeholder="••••••••" value={form.mdp2} onChange={e => update('mdp2', e.target.value)} />
              </div>
              <span className="error-msg">{errors.mdp2 || ''}</span>
            </div>
          </div>

          {/* CGU */}
          <label className="cgu-label">
            <input type="checkbox" checked={cgu} onChange={e => { setCgu(e.target.checked); setErrors(prev => ({...prev, cgu: ''})); }} />
            J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a>
          </label>
          <span className="error-msg">{errors.cgu || ''}</span>

          {/* Bouton */}
          <button className="btn-creer" onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'Création en cours...' : 'Créer mon Compte'}
          </button>

          {/* Lien connexion */}
          <p className="link-connexion">
            Vous avez déjà un compte ? <Link to="/connexion">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
