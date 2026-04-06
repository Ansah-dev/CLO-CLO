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

// Import Admin layouts & pages
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminClients from './pages/admin/AdminClients';
import AdminLivraisons from './pages/admin/AdminLivraisons';
import AdminLivreurs from './pages/admin/AdminLivreurs';
import AdminHistorique from './pages/admin/AdminHistorique';

// Import Livreur layouts & pages
import LivreurLayout from './components/layout/LivreurLayout';
import LivreurDashboard from './pages/livreur/LivreurDashboard';
import LivreurLivraison from './pages/livreur/LivreurLivraison';
import LivreurHistorique from './pages/livreur/LivreurHistorique';
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

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="livraisons" element={<AdminLivraisons />} />
          <Route path="livreurs" element={<AdminLivreurs />} />
          <Route path="historique" element={<AdminHistorique />} />
        </Route>

        {/* Livreur Dashboard Routes */}
        <Route path="/livreur" element={<LivreurLayout />}>
          <Route index element={<LivreurDashboard />} />
          <Route path="livraison" element={<LivreurLivraison />} />
          <Route path="historique" element={<LivreurHistorique />} />
        </Route>
      </Routes>
    </Router>
  );
}
