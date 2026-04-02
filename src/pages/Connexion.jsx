import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/styles/connexion.css';

/* ── Demo credentials ── */
const CREDENTIALS = {
  email: 'marie.kambale@email.com',
  mdp: 'marie123',
};

/* ── Toast helper ── */
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '30px', right: '30px',
    background: '#22c55e', color: 'white', padding: '14px 24px',
    borderRadius: '12px', fontFamily: "'Nunito', sans-serif",
    fontWeight: '700', fontSize: '0.95rem',
    boxShadow: '0 6px 24px rgba(0,0,0,0.2)', zIndex: '9999',
    opacity: '1', transition: 'opacity 0.3s',
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2500);
}

export default function Connexion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    const newErrors = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email invalide.';
    }
    if (!mdp) {
      newErrors.mdp = 'Mot de passe requis.';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (email !== CREDENTIALS.email || mdp !== CREDENTIALS.mdp) {
      setErrors({ mdp: 'Email ou mot de passe incorrect.' });
      return;
    }

    setSuccess(true);
    showToast('✅ Connexion réussie !');
    setTimeout(() => navigate('/profil'), 1400);
  };

  /* Enter key */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Enter') handleLogin(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  });

  return (
    <div className="page-bg bg-client">
      <div className="form-card">
        <div className="card-header">
          <div className="card-icon card-icon-green">🍹</div>
          <h1 className="card-title">Connexion</h1>
          <p className="card-sub">Accédez à votre compte Clo-Clo</p>
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">Email</label>
          <div className={`input-wrap ${errors.email ? 'error' : ''}`}>
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <input type="email" placeholder="votre@email.com" value={email} onChange={e => { setEmail(e.target.value); setErrors(prev => ({...prev, email: ''})); }} />
          </div>
          <span className="error-msg">{errors.email || ''}</span>
        </div>

        {/* Mot de passe */}
        <div className="form-group">
          <label className="form-label">Mot de passe</label>
          <div className={`input-wrap ${errors.mdp ? 'error' : ''}`}>
            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input type={showPwd ? 'text' : 'password'} placeholder="••••••••" value={mdp} onChange={e => { setMdp(e.target.value); setErrors(prev => ({...prev, mdp: ''})); }} />
            <button type="button" className="toggle-pwd" onClick={() => setShowPwd(!showPwd)}>
              <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
          <span className="error-msg">{errors.mdp || ''}</span>
        </div>

        {/* Se souvenir / Oublié */}
        <div className="remember-row">
          <label className="remember-label">
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
            Se souvenir de moi
          </label>
          <a href="#" className="forgot-link">Mot de passe oublié ?</a>
        </div>

        {/* Bouton connexion */}
        <button
          className="btn-main"
          onClick={handleLogin}
          disabled={success}
          style={success ? { background: '#16a34a' } : {}}
        >
          {success ? '✓ Connexion réussie !' : 'Se Connecter'}
        </button>

        {/* Séparateur */}
        <div className="separator">Nouveau client ?</div>

        {/* Créer compte */}
        <button className="btn-secondary" onClick={() => navigate('/inscription')}>Créer un Compte</button>

        {/* Liens admin */}
        <div className="bottom-links">
          <Link to="/connexion-directeur">Accès Directeur</Link>
          <span className="sep">|</span>
          <Link to="/connexion-livreur">Accès Livreur</Link>
        </div>
      </div>
    </div>
  );
}
