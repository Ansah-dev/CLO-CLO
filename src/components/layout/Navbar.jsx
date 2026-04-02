import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav>
      <Link to="/" className="nav-brand">
        <div className="nav-logo">🍹</div>
        <div>
          <div className="nav-brand-name">Clo-Clo</div>
          <div className="nav-brand-sub">Bar à Fruits &amp; Délices</div>
        </div>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/" className={path === '/' ? 'active' : ''}>
            <svg viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/menu" className={path === '/menu' ? 'active' : ''}>
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6"  x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/suivi" className={path === '/suivi' ? 'active' : ''}>
            <svg viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Suivi
          </Link>
        </li>
      </ul>

      <div className="nav-actions">
        <button className="btn-points">
          <svg viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          150 pts
        </button>

        <button className="cart-btn" aria-label="Panier">
          <svg viewBox="0 0 24 24">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span className="cart-badge">3</span>
        </button>

        <Link to="/profil" className="btn-profile" style={{ textDecoration: 'none' }}>
          <svg viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Profil
        </Link>
      </div>
    </nav>
  );
}
