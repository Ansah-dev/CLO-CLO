import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Suivi from './pages/Suivi';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import ConnexionLivreur from './pages/ConnexionLivreur';
import ConnexionDirecteur from './pages/ConnexionDirecteur';
import Profil from './pages/Profil';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Client-facing routes with Navbar + Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="suivi" element={<Suivi />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="profil" element={<Profil />} />
        </Route>

        {/* Standalone auth pages (no shared layout) */}
        <Route path="/connexion-livreur" element={<ConnexionLivreur />} />
        <Route path="/connexion-directeur" element={<ConnexionDirecteur />} />
      </Routes>
    </Router>
  );
}
