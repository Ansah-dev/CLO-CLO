import React, { useState } from 'react';

export default function LivreurHistorique() {
  const [filter, setFilter] = useState('toutes');

  const history = [
    {
      id: "DEL-045", cmd: "CMD-2026-045", date: "15 Mars 2026", time: "13:45",
      client: "Sophie Laurent", address: "456 Avenue Kasa-Vubu", articles: "3 articles", price: "12 500 FC",
      duree: "25 min", distance: "3.2 km", gains: "1 875 FC", rating: "⭐ 5/5",
      status: "complete"
    },
    {
      id: "DEL-044", cmd: "CMD-2026-044", date: "15 Mars 2026", time: "13:20",
      client: "Marc Dubois", address: "23 Rue Kasai", articles: "2 articles", price: "8 000 FC",
      duree: "18 min", distance: "2.1 km", gains: "1 200 FC", rating: "⭐ 5/5",
      status: "complete"
    },
    {
      id: "DEL-043", cmd: "CMD-2026-043", date: "15 Mars 2026", time: "12:50",
      client: "Lisa Chen", address: "789 Rue de la Paix", articles: "1 article", price: "4 500 FC",
      duree: "-", distance: "-", gains: "0 FC", rating: "-",
      status: "annule"
    },
    {
      id: "DEL-042", cmd: "CMD-2026-042", date: "15 Mars 2026", time: "12:30",
      client: "Ahmed Hassan", address: "45 Avenue Victoire", articles: "4 articles", price: "15 200 FC",
      duree: "22 min", distance: "4.1 km", gains: "2 280 FC", rating: "⭐ 4/5",
      status: "complete"
    },
    {
      id: "DEL-041", cmd: "CMD-2026-041", date: "15 Mars 2026", time: "12:00",
      client: "Emma Wilson", address: "12 Blvd du 30 Juin", articles: "2 articles", price: "7 000 FC",
      duree: "20 min", distance: "2.8 km", gains: "1 050 FC", rating: "⭐ 5/5",
      status: "complete"
    }
  ];

  const filteredHistory = filter === 'toutes' ? history : history.filter(h => h.status === filter);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Historique des Livraisons</h1>
        <p className="page-sub">Toutes vos livraisons passées</p>
      </div>

      <div className="stats-grid stats-grid-5">
        <div className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
          <div className="stat-label">Total</div><div className="stat-value">8</div>
        </div>
        <div className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
          <div className="stat-label">Complétées</div><div className="stat-value val-green">7</div>
        </div>
        <div className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
          <div className="stat-label">Annulées</div><div className="stat-value val-red">1</div>
        </div>
        <div className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
          <div className="stat-label">Total Gagné</div><div className="stat-value val-blue">11 205 FC</div>
        </div>
        <div className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
          <div className="stat-label">Note Moyenne</div><div className="stat-value val-yellow">⭐ 4.7</div>
        </div>
      </div>

      <div className="filter-row">
        <button className={`filter-chip ${filter === 'toutes' ? 'active' : ''}`} onClick={() => setFilter('toutes')}>Toutes (8)</button>
        <button className={`filter-chip ${filter === 'complete' ? 'active' : ''}`} onClick={() => setFilter('complete')}>Complétées (7)</button>
        <button className={`filter-chip ${filter === 'annule' ? 'active' : ''}`} onClick={() => setFilter('annule')}>Annulées (1)</button>
      </div>

      <div id="histo-list">
        {filteredHistory.map(h => (
          <div className={`histo-item ${h.status === 'annule' ? 'annule' : ''}`} key={h.id}>
            <div className="histo-header">
              {h.status === 'annule' ? (
                <div className="histo-icon-annule"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div>
              ) : (
                <div className="histo-icon-done"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              )}
              <div><div className="histo-id">{h.id}</div><div className="histo-cmd">{h.cmd}</div></div>
              <div className="histo-date">{h.date}<br/>{h.time}</div>
            </div>
            <div className="histo-body">
              <div className="histo-col"><div className="histo-col-label">Client</div><div className="histo-col-val">{h.client}</div><div className="histo-col-sub">{h.address}</div></div>
              <div className="histo-col"><div className="histo-col-label">Détails</div><div className="histo-col-val">{h.articles}</div><div className="histo-col-sub">{h.price}</div></div>
              <div className="histo-col"><div className="histo-col-label">Performance</div><div className="histo-col-val">⏱ {h.duree}</div><div className="histo-col-sub">{h.distance}</div></div>
              <div className="histo-col"><div className="histo-col-label">Gains</div><div className={`gains-val ${h.status === 'annule' ? 'gains-val-zero' : ''}`}>{h.gains}</div><div className="histo-col-sub">{h.rating}</div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
