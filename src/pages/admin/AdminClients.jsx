import React, { useState } from 'react';

export default function AdminClients() {
  const [searchQuery, setSearchQuery] = useState('');

  const clients = [
    {
      id: "CLT-001", name: "Marie Kambale", email: "marie.kambale@email.com", phone: "+243 987 654 321", address: "456 Avenue Kasa-Vubu, Kinshasa",
      points: 350, commandes: 24, depense: "285K FC",
      niveau: "Or", niveauClass: "niveau-or",
      memberSince: "10 Jan 2026", lastOrder: "15 Mars 2026"
    },
    {
      id: "CLT-002", name: "Pierre Kabongo", email: "pierre.k@email.com", phone: "+243 456 789 123", address: "123 Boulevard Lumumba, Kinshasa",
      points: 180, commandes: 15, depense: "165K FC",
      niveau: "Argent", niveauClass: "niveau-argent",
      memberSince: "25 Jan 2026", lastOrder: "14 Mars 2026"
    },
    {
      id: "CLT-003", name: "Sophie Laurent", email: "sophie.laurent@email.com", phone: "+243 321 456 789", address: "78 Avenue Victoire, Kinshasa",
      points: 520, commandes: 32, depense: "380K FC",
      niveau: "Or", niveauClass: "niveau-or",
      memberSince: "5 Déc 2025", lastOrder: "15 Mars 2026"
    },
    {
      id: "CLT-004", name: "Jean Mukendi", email: "jean.m@email.com", phone: "+243 654 321 987", address: "34 Rue Kasai, Kinshasa",
      points: 95, commandes: 8, depense: "87K FC",
      niveau: "Bronze", niveauClass: "niveau-bronze",
      memberSince: "10 Fév 2026", lastOrder: "12 Mars 2026"
    }
  ];

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.phone.includes(searchQuery)
  );

  return (
    <>
      <div className="page-header anim">
        <h1 className="page-title">Gestion des Clients</h1>
        <p className="page-sub">Vue d'ensemble de tous les clients</p>
      </div>

      <div className="stats-grid stats-grid-5 anim">
        <div className="stat-card"><div className="stat-label">Total Clients</div><div className="stat-value">5</div></div>
        <div className="stat-card"><div className="stat-label">Bronze</div><div className="stat-value val-orange">1</div></div>
        <div className="stat-card"><div className="stat-label">Argent</div><div className="stat-value" style={{color:'#64748b'}}>1</div></div>
        <div className="stat-card"><div className="stat-label">Or</div><div className="stat-value val-yellow">2</div></div>
        <div className="stat-card"><div className="stat-label">Platine</div><div className="stat-value val-purple">1</div></div>
      </div>

      <div className="card anim" style={{padding:'16px 20px', marginBottom:'20px'}}>
        <div className="search-bar">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input 
            type="text" 
            placeholder="Rechercher un client par nom, email ou téléphone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="clients-grid">
        {filteredClients.map(client => (
          <div className="client-card anim" key={client.id}>
            <div className="client-header">
              <div>
                <div className="client-name">{client.name}</div>
                <div className="client-id">{client.id}</div>
                <div className="client-stats">
                  <div className="cstat"><div className="cstat-label">Points</div><div className="cstat-val"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>{client.points}</div></div>
                  <div className="cstat"><div className="cstat-label">Commandes</div><div className="cstat-val">{client.commandes}</div></div>
                  <div className="cstat"><div className="cstat-label">Total Dépensé</div><div className="cstat-val">{client.depense}</div></div>
                </div>
              </div>
              <div className={`niveau-badge ${client.niveauClass}`}>
                <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>{client.niveau}
              </div>
            </div>
            <div className="client-body">
              <div className="client-info"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>{client.email}</div>
              <div className="client-info"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg>{client.phone}</div>
              <div className="client-info"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{client.address}</div>
              <div className="client-dates">
                <div><div className="cdate-label">Membre depuis</div><div className="cdate-val">{client.memberSince}</div></div>
                <div><div className="cdate-label">Dernière commande</div><div className="cdate-val">{client.lastOrder}</div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
