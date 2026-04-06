import React, { useState } from 'react';

export default function AdminLivraisons() {
  const [livraisons] = useState([
    {
      id: "DEL-001", cmd: "CMD-2026-048", time: "14:30", eta: "10 min",
      statusBadge: "badge-en-livraison", statusText: "🚚 En Livraison",
      clientName: "Marie Kambale", clientPhone: "+243 987 654 321", clientAddress: "456 Avenue Kasa-Vubu, Kinshasa",
      livreurName: "Jean Mukendi", livreurPhone: "+243 123 456 789", hasLivreur: true,
      articles: ["Smoothie Tropical", "Jus d'Orange Pressé", "Glace Vanille"], total: "9,700 FC",
      actionBlue: null, actionGreen: "Démarrer la Livraison"
    },
    {
      id: "DEL-002", cmd: "CMD-2026-047", time: "14:45", eta: "En attente",
      statusBadge: "badge-pret", statusText: "✅ Prêt à Livrer",
      clientName: "Pierre Kabongo", clientPhone: "+243 456 789 123", clientAddress: "123 Boulevard Lumumba, Kinshasa",
      livreurName: "Sophie Tshombe", livreurPhone: "+243 321 654 987", hasLivreur: true,
      articles: ["Salade de Fruits", "Smoothie Berry"], total: "7,700 FC",
      actionBlue: null, actionGreen: "Démarrer la Livraison"
    },
    {
      id: "DEL-003", cmd: "CMD-2026-046", time: "15:00", eta: "15 min",
      statusBadge: "badge-preparation", statusText: "📦 En Préparation",
      clientName: "Alice Mbuyi", clientPhone: "+243 789 123 456", clientAddress: "789 Rue de la Paix, Kinshasa",
      livreurName: null, livreurPhone: null, hasLivreur: false,
      articles: ["Jus de Pastèque", "Glace Chocolat", "Salade Tropicale"], total: "8,500 FC",
      actionBlue: "Marquer comme Prêt", actionGreen: null
    }
  ]);

  return (
    <>
      <div className="page-header anim">
        <h1 className="page-title">Livraisons en Cours</h1>
        <p className="page-sub">Gérez et suivez les livraisons actives</p>
      </div>

      {livraisons.map(liv => (
        <div className="livraison-block anim" key={liv.id}>
          <div className="liv-header">
            <div>
              <div className="liv-id-label">Livraison</div>
              <div className="liv-id">{liv.id}</div>
              <div className="liv-cmd">Commande : {liv.cmd}</div>
              <div className="liv-meta">
                <div className="liv-meta-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Commandé à {liv.time}</div>
                <div className="liv-meta-item"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> ETA : {liv.eta}</div>
              </div>
            </div>
            <span className={`badge ${liv.statusBadge}`} style={{ fontSize: '0.9rem', padding: '8px 18px' }}>{liv.statusText}</span>
          </div>
          <div className="liv-body">
            <div className="liv-grid">
              <div className="liv-col liv-col-blue col-blue">
                <div className="liv-col-title"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Client</div>
                <div className="liv-name">{liv.clientName}</div>
                <div className="liv-info" style={{ color: '#3b82f6' }}><svg style={{ stroke: '#3b82f6' }} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12"/></svg>{liv.clientPhone}</div>
                <div className="liv-info" style={{ color: '#3b82f6' }}><svg style={{ stroke: '#3b82f6' }} viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{liv.clientAddress}</div>
              </div>
              <div className="liv-col liv-col-green col-green">
                <div className="liv-col-title"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Livreur</div>
                {liv.hasLivreur ? (
                  <>
                    <div className="liv-name">{liv.livreurName}</div>
                    <div className="liv-info" style={{ color: 'var(--green)' }}><svg style={{ stroke: 'var(--green)' }} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg>{liv.livreurPhone}</div>
                    <button className="btn-green btn-sm" style={{ marginTop: '10px', width: '100%' }}>Contacter le Livreur</button>
                  </>
                ) : (
                  <>
                    <p className="no-livreur">Aucun livreur assigné</p>
                    <button className="btn-green btn-sm" style={{ width: '100%' }}>Assigner un Livreur</button>
                  </>
                )}
              </div>
              <div className="liv-col liv-col-purple col-purple">
                <div className="liv-col-title"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> Détails Commande</div>
                <ul className="articles-list">
                  {liv.articles.map((art, idx) => <li key={idx}>{art}</li>)}
                </ul>
                <div className="liv-total">Total : {liv.total}</div>
              </div>
            </div>
            <div className="liv-actions">
              {liv.actionGreen && <button className="btn-action-green">{liv.actionGreen}</button>}
              {liv.actionBlue && <button className="btn-action-blue">{liv.actionBlue}</button>}
              <button className="btn-action-outline">Voir Détails</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
