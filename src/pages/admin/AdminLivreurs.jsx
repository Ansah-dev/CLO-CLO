import React from 'react';

export default function AdminLivreurs() {
  const livreurs = [
    {
      id: "DRV-001", name: "Jean Mukendi", phone: "+243 123 456 789", email: "jean.mukendi@cloclo.cd", zone: "Avenue Kasa-Vubu",
      vehicule: "Voiture", plaque: "CD-KIN-0472", tempsMoyen: "18 min",
      note: 4.8, livraisons: 245, aujourdhui: 12,
      status: "En Livraison", statusClass: "badge-en-livraison", statusIcon: "● En Livraison",
      activeDelivery: "DEL-001"
    },
    {
      id: "DRV-002", name: "Sophie Tshombe", phone: "+243 321 654 987", email: "sophie.tshombe@cloclo.cd", zone: "Centre-Ville",
      vehicule: "Voiture", plaque: "CD-KIN-5521", tempsMoyen: "18 min",
      note: 4.9, livraisons: 312, aujourdhui: 15,
      status: "Disponible", statusClass: "badge-disponible", statusIcon: "● Disponible",
      activeDelivery: null
    },
    {
      id: "DRV-003", name: "Pierre Kabongo", phone: "+243 789 123 456", email: "pierre.kabongo@cloclo.cd", zone: "Gombe",
      vehicule: "Moto", plaque: "CD-KIN-9012", tempsMoyen: "25 min",
      note: 4.7, livraisons: 198, aujourdhui: 10,
      status: "En Livraison", statusClass: "badge-en-livraison", statusIcon: "● En Livraison",
      activeDelivery: "DEL-002"
    },
    {
      id: "DRV-004", name: "Alice Nsele", phone: "+243 654 987 321", email: "alice.nsele@cloclo.cd", zone: "Hors service",
      vehicule: "Moto", plaque: "CD-KIN-3456", tempsMoyen: "28 min",
      note: 4.6, livraisons: 156, aujourdhui: 8,
      status: "Hors Service", statusClass: "badge-hors-service", statusIcon: "● Hors Service",
      activeDelivery: null
    }
  ];

  return (
    <>
      <div className="page-header anim">
        <h1 className="page-title">Gestion des Livreurs</h1>
        <p className="page-sub">Suivi et gestion de l'équipe de livraison</p>
      </div>

      <div className="stats-grid stats-grid-5 anim">
        <div className="stat-card"><div className="stat-label">Total Livreurs</div><div className="stat-value">4</div></div>
        <div className="stat-card"><div className="stat-label">Disponibles</div><div className="stat-value val-green">1</div></div>
        <div className="stat-card"><div className="stat-label">En Livraison</div><div className="stat-value val-blue">2</div></div>
        <div className="stat-card"><div className="stat-label">Hors Service</div><div className="stat-value val-orange">1</div></div>
        <div className="stat-card"><div className="stat-label">Livraisons Aujourd'hui</div><div className="stat-value val-green">45</div></div>
      </div>

      <div className="livreurs-grid">
        {livreurs.map(liv => (
          <div className="livreur-card anim" key={liv.id}>
            <div className="livreur-header">
              <div className="livreur-avatar">
                <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div className="livreur-name">{liv.name}</div>
                <div className="livreur-id">{liv.id}</div>
                <div className="livreur-stats">
                  <div className="lstat"><div className="lstat-label">Note</div><div className="lstat-val"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>{liv.note}</div></div>
                  <div className="lstat"><div className="lstat-label">Livraisons</div><div className="lstat-val">{liv.livraisons}</div></div>
                  <div className="lstat"><div className="lstat-label">Aujourd'hui</div><div className="lstat-val">{liv.aujourdhui}</div></div>
                </div>
              </div>
              <span className={`badge ${liv.statusClass}`}>{liv.statusIcon}</span>
            </div>
            <div className="livreur-body">
              <div className="livreur-info"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg>{liv.phone}</div>
              <div className="livreur-info"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>{liv.email}</div>
              <div className="livreur-info"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{liv.zone}</div>
              
              {liv.activeDelivery && (
                <div className="livraison-active">
                  <div className="la-label">Livraison Active</div>
                  <div className="la-id">{liv.activeDelivery}</div>
                </div>
              )}

              <div className="livreur-meta" style={{ marginTop: liv.activeDelivery ? '0' : '14px' }}>
                <div><div className="lm-label">Véhicule</div><div className="lm-val">{liv.vehicule}</div><div className="lm-sub">{liv.plaque}</div></div>
                <div><div className="lm-label">Temps Moyen</div><div className="lm-val">{liv.tempsMoyen}</div></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn-green" style={{ padding: '14px 32px', fontSize: '1rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'8px', verticalAlign:'middle'}}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          Ajouter un Livreur
        </button>
      </div>
    </>
  );
}
