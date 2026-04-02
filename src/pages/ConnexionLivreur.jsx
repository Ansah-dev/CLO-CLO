import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/styles/connexion.css';

/* ── Toast helper ── */
function showToast(msg, color = 'green') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '30px', right: '30px',
    background: color === 'red' ? '#ef4444' : '#22c55e',
    color: 'white', padding: '14px 24px', borderRadius: '12px',
    fontFamily: "'Nunito', sans-serif", fontWeight: '700', fontSize: '0.95rem',
    boxShadow: '0 6px 24px rgba(0,0,0,0.2)', zIndex: '9999',
    opacity: '1', transition: 'opacity 0.3s',
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2500);
}

export default function ConnexionLivreur() {
  const navigate = useNavigate();
  const [driverId, setDriverId] = useState('');
  const [mdp, setMdp] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    const newErrors = {};
    if (!driverId.trim()) newErrors.id = 'Identifiant requis.';
    if (!mdp) newErrors.mdp = 'Mot de passe requis.';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    if (driverId !== 'DRV-001' || mdp !== 'driver123') {
      setErrors({ mdp: 'Identifiant ou mot de passe incorrect.' });
      return;
    }
    setSuccess(true);
    showToast('✅ Connexion réussie !');
    // For now redirect to home since livreur dashboard is Phase 3
    setTimeout(() => navigate('/'), 1400);
  };

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Enter') handleLogin(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  });

  return (
    <div className="page-bg bg-livreur" style={{ minHeight: '100vh' }}>
      <div className="form-card">
        <div className="card-header">
          <div className="card-icon card-icon-green">🚚</div>
          <h1 className="card-title">Espace Livreur</h1>
          <p className="card-sub">Connexion pour les livreurs Clo-Clo</p>
        </div>

        {/* Bannière verte */}
        <div className="info-banner banner-green">
          <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          <div>
            <div className="info-banner-title">Bienvenue !</div>
            <div className="info-banner-sub">Connectez-vous pour gérer vos livraisons</div>
          </div>
        </div>

        {/* Identifiant */}
        <div className="form-group">
          <label className="form-label">Identifiant Livreur</label>
          <div className={`input-wrap ${errors.id ? 'error' : ''}`}>
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <input type="text" placeholder="DRV-001" value={driverId} onChange={e => { setDriverId(e.target.value); setErrors(p => ({...p, id: ''})); }} />
          </div>
          <span className="error-msg">{errors.id || ''}</span>
        </div>

        {/* Mot de passe */}
        <div className="form-group">
          <label className="form-label">Mot de passe</label>
          <div className={`input-wrap ${errors.mdp ? 'error' : ''}`}>
            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input type={showPwd ? 'text' : 'password'} placeholder="••••••••" value={mdp} onChange={e => { setMdp(e.target.value); setErrors(p => ({...p, mdp: ''})); }} />
            <button type="button" className="toggle-pwd" onClick={() => setShowPwd(!showPwd)}>
              <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
          <span className="error-msg">{errors.mdp || ''}</span>
        </div>

        <button className="btn-main" onClick={handleLogin} disabled={success}
          style={success ? { background: '#16a34a' } : {}}>
          {success ? '✓ Connexion réussie !' : 'Se Connecter'}
        </button>

        <div className="demo-hint">Demo : DRV-001 / driver123</div>

        <div className="bottom-links">
          <Link to="/">← Site client</Link>
          <span className="sep">|</span>
          <Link to="/connexion-directeur">Espace directeur</Link>
        </div>
      </div>
    </div>
  );
}
