import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Clo-Clo Bar à Fruits</div>
          <p className="footer-brand-desc">
            Des fruits frais, des jus naturels et des délices glacés pour tous les goûts.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Horaires</div>
          <p>Lundi - Samedi : 8h – 20h</p>
          <p>Dimanche : 10h – 18h</p>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <div className="contact-item"><span>📞</span><span>+237 123 456 789</span></div>
          <div className="contact-item"><span>📧</span><span>contact@cloclo.cd</span></div>
          <div className="contact-item"><span>📍</span><span>Yaoundé, Cameroun</span></div>
        </div>
      </div>

      <hr className="divider" />
      <p className="footer-copy">© 2026 Clo-Clo Bar à Fruits &amp; Délices. Tous droits réservés.</p>
    </footer>
  );
}
