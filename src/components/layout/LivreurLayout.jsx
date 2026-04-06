import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import '../../assets/styles/livreur.css';

export default function LivreurLayout() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">🍹</div>
          <div>
            <div className="sidebar-brand-name">Clo-Clo Livreur</div>
            <div className="sidebar-brand-sub">Espace Livraison</div>
          </div>
        </div>
        <div className="sidebar-profile">
          <div className="profile-avatar">
            <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div>
            <div className="profile-name">Jean Mukendi</div>
            <div className="profile-id">ID: DRV-001</div>
            <div className="profile-statut">
              <div className="statut-label">Statut :</div>
              <div className="statut-badge"><span className="dot-green"></span> Disponible</div>
            </div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/livreur" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            Tableau de Bord
          </NavLink>
          <NavLink to="/livreur/livraison" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            Livraison Active
          </NavLink>
          <NavLink to="/livreur/historique" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Historique
          </NavLink>
        </nav>
        <div className="sidebar-bottom">
          <a href="#" className="nav-item">
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            Notifications<span className="notif-badge">2</span>
          </a>
          <button className="btn-logout" onClick={() => navigate('/connexion-livreur')}>
            <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Déconnexion
          </button>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
