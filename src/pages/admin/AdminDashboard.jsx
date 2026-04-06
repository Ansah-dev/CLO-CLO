import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function AdminDashboard() {
  const chartVentesRef = useRef(null);
  const chartCommandesRef = useRef(null);

  useEffect(() => {
    let ventesChart;
    let commandesChart;

    if (chartVentesRef.current) {
      ventesChart = new Chart(chartVentesRef.current, {
        type: "bar",
        data: {
          labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
          datasets: [{
            label: "Ventes (FC)",
            data: [62000, 78000, 80000, 95000, 120000, 140000, 115000],
            backgroundColor: "#22c55e",
            borderRadius: 8,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { family: "Nunito", weight: "700" } } },
            y: { grid: { color: "#f3f4f6", borderDash: [4, 4] }, ticks: { font: { family: "Nunito" } } }
          }
        }
      });
    }

    if (chartCommandesRef.current) {
      commandesChart = new Chart(chartCommandesRef.current, {
        type: "line",
        data: {
          labels: ["8h","9h","10h","11h","12h","13h","14h","15h","16h","17h"],
          datasets: [{
            label: "Commandes",
            data: [4, 8, 14, 24, 18, 20, 28, 22, 31, 16],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.08)",
            borderWidth: 2.5,
            pointBackgroundColor: "#3b82f6",
            pointRadius: 4,
            tension: 0.4,
            fill: true,
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { family: "Nunito", weight: "700" } } },
            y: { grid: { color: "#f3f4f6", borderDash: [4, 4] }, ticks: { font: { family: "Nunito" } } }
          }
        }
      });
    }

    return () => {
      ventesChart?.destroy();
      commandesChart?.destroy();
    };
  }, []);

  return (
    <>
      <div className="page-header anim">
        <h1 className="page-title">Tableau de Bord</h1>
        <p className="page-sub">Vue d'ensemble des opérations</p>
      </div>

      <div className="stats-grid stats-grid-4 anim">
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-box" style={{background:'#dcfce7'}}>💰</div>
            <span className="stat-badge badge-green">+12%</span>
          </div>
          <div className="stat-label">Revenus du Jour</div>
          <div className="stat-value">245,000 FC</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-box" style={{background:'#dbeafe'}}>🛍️</div>
            <span className="stat-badge badge-blue">+8%</span>
          </div>
          <div className="stat-label">Commandes</div>
          <div className="stat-value">48</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-box" style={{background:'#f3e8ff'}}>👥</div>
            <span className="stat-badge badge-purple">+15%</span>
          </div>
          <div className="stat-label">Clients Actifs</div>
          <div className="stat-value">324</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-top">
            <div className="stat-icon-box" style={{background:'#fff7ed'}}>🚚</div>
            <span className="stat-badge badge-red">-3</span>
          </div>
          <div className="stat-label">En Livraison</div>
          <div className="stat-value">12</div>
        </div>
      </div>

      <div className="charts-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div className="card">
          <div className="card-title">Ventes de la Semaine</div>
          <canvas ref={chartVentesRef} height="220"></canvas>
        </div>
        <div className="card">
          <div className="card-title">Commandes Aujourd'hui</div>
          <canvas ref={chartCommandesRef} height="220"></canvas>
        </div>
      </div>

      <div className="bottom-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="card">
          <div className="card-title">Produits Populaires</div>
          {[
            { num: 1, name: "Smoothie Tropical", cmds: 45, rev: "202,500 FC" },
            { num: 2, name: "Jus d'Orange", cmds: 38, rev: "114,000 FC" },
            { num: 3, name: "Salade de Fruits", cmds: 32, rev: "112,000 FC" },
            { num: 4, name: "Glace Vanille", cmds: 28, rev: "70,000 FC" },
            { num: 5, name: "Smoothie Berry", cmds: 25, rev: "105,000 FC" }
          ].map((prod) => (
            <div className="product-rank" key={prod.num} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 0', borderBottom: '1px solid #f3f4f6' }}>
              <div className="rank-num" style={{ width: '36px', height: '36px', background: 'var(--green)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.9rem', flexShrink: 0 }}>{prod.num}</div>
              <div className="rank-info" style={{ flex: 1 }}>
                <div className="rank-name" style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{prod.name}</div>
                <div className="rank-cmds" style={{ fontSize: '0.8rem', color: 'var(--text-gray)', fontWeight: 500 }}>{prod.cmds} commandes</div>
              </div>
              <div className="rank-rev" style={{ fontWeight: 800, color: 'var(--green)', fontSize: '0.95rem' }}>{prod.rev}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-title">Commandes Récentes</div>
          {[
            { id: "CMD-001", meta: "Marie K. • 3 articles", price: "12,500 FC", badgeClass: "badge-en-route", badgeLabel: "En Route" },
            { id: "CMD-002", meta: "Jean M. • 2 articles", price: "8,000 FC", badgeClass: "badge-preparation", badgeLabel: "Préparation" },
            { id: "CMD-003", meta: "Sophie L. • 4 articles", price: "15,200 FC", badgeClass: "badge-livre", badgeLabel: "Livré" },
            { id: "CMD-004", meta: "Pierre D. • 1 article", price: "4,500 FC", badgeClass: "badge-pret", badgeLabel: "Prêt" },
            { id: "CMD-005", meta: "Alice B. • 2 articles", price: "7,000 FC", badgeClass: "badge-en-route", badgeLabel: "En Route" }
          ].map((cmd) => (
            <div className="cmd-item" key={cmd.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #f3f4f6' }}>
              <div>
                <div className="cmd-id" style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{cmd.id}</div>
                <div className="cmd-meta" style={{ fontSize: '0.82rem', color: 'var(--text-gray)', fontWeight: 500, marginTop: '2px' }}>{cmd.meta}</div>
              </div>
              <div className="cmd-right" style={{ textAlign: 'right' }}>
                <div className="cmd-price" style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.95rem', marginBottom: '4px' }}>{cmd.price}</div>
                <span className={`badge ${cmd.badgeClass}`}>{cmd.badgeLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
