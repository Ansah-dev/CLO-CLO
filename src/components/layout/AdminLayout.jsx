import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import '../../assets/styles/admin.css';

export default function AdminLayout() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#f9fafb' }}>
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">🍹</div>
          <div>
            <div className="sidebar-brand-name">Clo-Clo Admin</div>
            <div className="sidebar-brand-sub">Espace Directeur</div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/admin" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            Tableau de Bord
          </NavLink>
          <NavLink to="/admin/livraisons" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            Livraisons en Cours
          </NavLink>
          <NavLink to="/admin/historique" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Historique
          </NavLink>
          <NavLink to="/admin/clients" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Clients
          </NavLink>
          <NavLink to="/admin/livreurs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Livreurs
          </NavLink>
        </nav>
        <div className="sidebar-logout">
          <button className="btn-logout" onClick={() => navigate('/connexion-directeur')}>
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
