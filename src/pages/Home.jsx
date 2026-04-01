import React from 'react';

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════
           HERO
      ════════════════════════════════ */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenue chez <span className="hi">Clo-<br />Clo</span>
          </h1>
          <p className="hero-desc">
            Découvrez nos délicieux jus de fruits frais, smoothies, glaces et bien
            plus encore. Commandez en ligne et recevez votre commande rapidement !
          </p>
          <div className="hero-btns">
            <button className="btn-white-solid">Voir le Menu &nbsp;→</button>
            <button className="btn-outline-white">S'inscrire</button>
          </div>
        </div>

        <div className="hero-img-wrap">
          <div className="hero-img-card">
            <img
              src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80"
              alt="Jus de fruits frais Clo-Clo"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
           FEATURES
      ════════════════════════════════ */}
      <section className="features">
        <div className="features-grid">

          <div className="feature-card">
            <span className="feature-icon">🍹</span>
            <div className="feature-title">Produits Frais</div>
            <p className="feature-desc">100% naturel, préparé avec des fruits frais du jour</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <div className="feature-title">Livraison Rapide</div>
            <p className="feature-desc">Livré chez vous en moins de 30 minutes</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⭐</span>
            <div className="feature-title">Programme de Points</div>
            <p className="feature-desc">Gagnez des points à chaque commande et profitez de privilèges exclusifs</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎁</span>
            <div className="feature-title">Offres Spéciales</div>
            <p className="feature-desc">Profitez de nos promotions et réductions régulières</p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════
           PRODUITS POPULAIRES
      ════════════════════════════════ */}
      <section className="products">
        <div className="section-header">
          <h2 className="section-title">Nos Produits Populaires</h2>
          <p className="section-sub">Les favoris de nos clients</p>
        </div>

        <div className="products-grid">

          <div className="product-card">
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80" alt="Jus Tropical"/>
              <span className="product-price">3500 FC</span>
            </div>
            <div className="product-info">
              <div className="product-name">Jus Tropical</div>
              <button className="product-order">Commander →</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80" alt="Smoothie Bowl"/>
              <span className="product-price">4500 FC</span>
            </div>
            <div className="product-info">
              <div className="product-name">Smoothie Bowl</div>
              <button className="product-order">Commander →</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80" alt="Glace Artisanale"/>
              <span className="product-price">2500 FC</span>
            </div>
            <div className="product-info">
              <div className="product-name">Glace Artisanale</div>
              <button className="product-order">Commander →</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=600&q=80" alt="Salade de Fruits"/>
              <span className="product-price">3000 FC</span>
            </div>
            <div className="product-info">
              <div className="product-name">Salade de Fruits</div>
              <button className="product-order">Commander →</button>
            </div>
          </div>

        </div>

        <div className="products-cta">
          <button className="btn-green-solid">Voir Tout le Menu &nbsp;→</button>
        </div>
      </section>

      {/* ═══════════════════════════════
           COMMENT ÇA MARCHE
      ════════════════════════════════ */}
      <section className="how">
        <h2 className="how-title">Comment ça marche ?</h2>

        <div className="how-steps">

          <div className="step">
            <div className="step-num">1</div>
            <div className="step-name">Parcourez le Menu</div>
            <p className="step-desc">Explorez notre sélection de jus, smoothies, glaces et salades de fruits</p>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <div className="step-name">Passez Commande</div>
            <p className="step-desc">Ajoutez vos produits favoris au panier et validez votre commande</p>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <div className="step-name">Suivez la Livraison</div>
            <p className="step-desc">Recevez votre commande en moins de 30 minutes et suivez-la en temps réel</p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════
           CTA
      ════════════════════════════════ */}
      <section className="cta-section">
        <h2 className="cta-title">Prêt à Commander ?</h2>
        <p className="cta-desc">Créez votre compte et commencez à gagner des points dès votre première commande !</p>
        <button className="btn-cta">Créer un Compte &nbsp;→</button>
      </section>
    </>
  );
}
