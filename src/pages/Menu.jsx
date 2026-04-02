import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../assets/styles/menu.css';

/* ── Product data from app-data ── */
const products = [
  { id: 1, name: "Jus d'Orange Pressé",       price: 3000, category: "jus",       popular: true,  desc: "Oranges fraîches pressées à la minute",        img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80" },
  { id: 2, name: "Smoothie Tropical",          price: 4500, category: "smoothies", popular: true,  desc: "Mangue, ananas, banane et lait de coco",        img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80" },
  { id: 3, name: "Glace Vanille",              price: 2500, category: "glaces",    popular: false, desc: "Glace artisanale à la vanille de Madagascar",   img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80" },
  { id: 4, name: "Salade de Fruits Exotiques", price: 3500, category: "salades",   popular: true,  desc: "Ananas, mangue, papaye, fruits de la passion",  img: "https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=600&q=80" },
  { id: 5, name: "Jus de Pastèque",            price: 2800, category: "jus",       popular: false, desc: "Pastèque fraîche avec menthe",                  img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80" },
  { id: 6, name: "Smoothie Berry",             price: 4200, category: "smoothies", popular: false, desc: "Fraises, framboises, myrtilles et yaourt",      img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80" },
  { id: 7, name: "Glace Chocolat",             price: 2800, category: "glaces",    popular: false, desc: "Glace onctueuse au chocolat belge",              img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=80" },
  { id: 8, name: "Salade Tropicale",           price: 3200, category: "salades",   popular: false, desc: "Fruits tropicaux avec sirop de citron vert",    img: "https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=600&q=80" },
];

const categories = ["tous", "jus", "smoothies", "glaces", "salades"];

/* ── Toast helper ── */
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '30px', right: '30px',
    background: '#22c55e', color: 'white', padding: '14px 24px',
    borderRadius: '12px', fontFamily: "'Nunito', sans-serif",
    fontWeight: '700', fontSize: '0.95rem',
    boxShadow: '0 6px 24px rgba(0,0,0,0.2)', zIndex: '9999',
    opacity: '1', transition: 'opacity 0.3s',
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 2500);
}

/* ── Product Card component ── */
function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);

  const handleAdd = useCallback(() => {
    if (added) return;
    setAdded(true);
    showToast(`✅ ${product.name} ajouté au panier !`);
    setTimeout(() => setAdded(false), 1200);
  }, [added, product.name]);

  /* Scroll reveal */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="product-card" ref={cardRef}>
      <div className="product-img-wrap">
        <img src={product.img} alt={product.name} />
        {product.popular && <span className="badge-popular">⭐ Populaire</span>}
        <span className="product-price">{product.price.toLocaleString()} FC</span>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <p className="product-desc">{product.desc}</p>
        <button
          className="btn-add"
          onClick={handleAdd}
          disabled={added}
          style={added ? { background: '#16a34a' } : {}}
        >
          {added ? '✓ Ajouté !' : (
            <>
              <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Ajouter
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Menu Page ── */
export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('tous');

  const filteredProducts = activeFilter === 'tous'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <>
      {/* En-tête du menu */}
      <section className="menu-header">
        <h1 className="menu-title">Notre Menu</h1>
        <p className="menu-sub">Découvrez nos délicieuses créations</p>

        <div className="filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Grille des produits */}
      <section className="menu-section">
        {filteredProducts.length > 0 ? (
          <div className="products-grid" key={activeFilter}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span>😕</span>
            <p>Aucun produit dans cette catégorie pour le moment.</p>
          </div>
        )}
      </section>
    </>
  );
}
