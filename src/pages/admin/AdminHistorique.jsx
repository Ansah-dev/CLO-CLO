import React, { useState } from 'react';

export default function AdminHistorique() {
  const [filter, setFilter] = useState('tous');
  const [search, setSearch] = useState('');

  const historique = [
    {
      id: "DEL-045", cmd: "CMD-2026-045", client: "Sophie Laurent", livreur: "Jean Mukendi",
      date: "15 Mars 2026", time: "13:45", articles: 3, total: "12 500 FC",
      duree: "25 min", status: "livre", statusText: "✅ Livré", statusBadge: "badge-livre"
    },
    {
      id: "DEL-044", cmd: "CMD-2026-044", client: "Marc Dubois", livreur: "Sophie Tshombe",
      date: "15 Mars 2026", time: "13:20", articles: 2, total: "8 000 FC",
      duree: "18 min", status: "livre", statusText: "✅ Livré", statusBadge: "badge-livre"
    },
    {
      id: "DEL-043", cmd: "CMD-2026-043", client: "Lisa Chen", livreur: "Pierre Kabongo",
      date: "15 Mars 2026", time: "12:50", articles: 1, total: "4 500 FC",
      duree: "-", status: "annule", statusText: "❌ Annulé", statusBadge: "badge-annule"
    },
    {
      id: "DEL-042", cmd: "CMD-2026-042", client: "Ahmed Hassan", livreur: "Jean Mukendi",
      date: "15 Mars 2026", time: "12:30", articles: 4, total: "15 200 FC",
      duree: "22 min", status: "livre", statusText: "✅ Livré", statusBadge: "badge-livre"
    },
    {
      id: "DEL-041", cmd: "CMD-2026-041", client: "Emma Wilson", livreur: "Sophie Tshombe",
      date: "15 Mars 2026", time: "12:00", articles: 2, total: "7 000 FC",
      duree: "20 min", status: "livre", statusText: "✅ Livré", statusBadge: "badge-livre"
    },
    {
      id: "DEL-040", cmd: "CMD-2026-040", client: "David Martin", livreur: "Pierre Kabongo",
      date: "14 Mars 2026", time: "19:30", articles: 3, total: "10 500 FC",
      duree: "28 min", status: "livre", statusText: "✅ Livré", statusBadge: "badge-livre"
    },
    {
      id: "DEL-039", cmd: "CMD-2026-039", client: "Anna Schmidt", livreur: "Jean Mukendi",
      date: "14 Mars 2026", time: "18:45", articles: 1, total: "3 500 FC",
      duree: "15 min", status: "livre", statusText: "✅ Livré", statusBadge: "badge-livre"
    },
    {
      id: "DEL-038", cmd: "CMD-2026-038", client: "Carlos Rodriguez", livreur: "Sophie Tshombe",
      date: "14 Mars 2026", time: "18:00", articles: 5, total: "18 000 FC",
      duree: "30 min", status: "livre", statusText: "✅ Livré", statusBadge: "badge-livre"
    }
  ];

  const filteredHistory = historique.filter(h => {
    const matchesFilter = filter === 'tous' || h.status === filter;
    const matchesSearch = 
      h.cmd.toLowerCase().includes(search.toLowerCase()) || 
      h.client.toLowerCase().includes(search.toLowerCase()) || 
      h.livreur.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <div className="page-header anim">
        <h1 className="page-title">Historique des Livraisons</h1>
        <p className="page-sub">Toutes les livraisons passées</p>
      </div>

      <div className="stats-grid stats-grid-4 anim">
        <div className="stat-card"><div className="stat-label">Total Livraisons</div><div className="stat-value">8</div></div>
        <div className="stat-card"><div className="stat-label">Livrées</div><div className="stat-value val-green">7</div></div>
        <div className="stat-card"><div className="stat-label">Annulées</div><div className="stat-value val-red">1</div></div>
        <div className="stat-card"><div className="stat-label">Revenus Total</div><div className="stat-value val-blue">74 700 FC</div></div>
      </div>

      <div className="card anim">
        <div className="toolbar" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div className="search-bar" style={{ flex: 1, minWidth: '260px' }}>
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input 
              type="text" 
              placeholder="Rechercher par commande, client ou livreur..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter-row">
            <button className={`filter-chip ${filter === 'tous' ? 'active' : ''}`} onClick={() => setFilter('tous')}>Tous</button>
            <button className={`filter-chip ${filter === 'livre' ? 'active' : ''}`} onClick={() => setFilter('livre')}>Livrées</button>
            <button className={`filter-chip ${filter === 'annule' ? 'active' : ''}`} onClick={() => setFilter('annule')}>Annulées</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Filtrer par Date
          </button>
          <button className="btn-green" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Exporter
          </button>
        </div>
      </div>

      <div className="card anim">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID LIVRAISON</th>
                <th>COMMANDE</th>
                <th>CLIENT</th>
                <th>LIVREUR</th>
                <th>DATE &amp; HEURE</th>
                <th>ARTICLES</th>
                <th>TOTAL</th>
                <th>TEMPS</th>
                <th>STATUT</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.cmd}</td>
                  <td><strong>{row.client}</strong></td>
                  <td>{row.livreur}</td>
                  <td>{row.date}<br/><small style={{color:'#9ca3af'}}>{row.time}</small></td>
                  <td>{row.articles}</td>
                  <td>{row.total}</td>
                  <td>{row.duree}</td>
                  <td><span className={`badge ${row.statusBadge}`}>{row.statusText}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
