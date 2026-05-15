import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="foot-title">Innogreen India Marketing (IGIM)</div>
            <div className="foot-text">
              Trusted Agro-Input Distribution &amp; Technical Support.
            </div>
            <div className="foot-small" style={{ marginTop: 10 }}>
              Coverage: Tamil Nadu &amp; Kerala
            </div>
          </div>
          <div>
            <div className="foot-title">Quick Links</div>
            <div className="foot-small">
              <Link href="/">Home</Link>
            </div>
            <div className="foot-small">
              <Link href="/products">Products</Link>
            </div>
            <div className="foot-small">
              <Link href="/brands">Brands</Link>
            </div>
            <div className="foot-small">
              <Link href="/dealer-hub">Dealer Hub</Link>
            </div>
          </div>
          <div>
            <div className="foot-title">Categories</div>
            <div className="foot-small">Water-Soluble Fertilizers</div>
            <div className="foot-small">Bio-Inputs</div>
            <div className="foot-small">Micronutrients</div>
            <div className="foot-small">Pesticides</div>
            <div className="foot-small">Consulting</div>
          </div>
          <div>
            <div className="foot-title">Contact</div>
            <div className="foot-small">
              <b>WhatsApp/Phone:</b> +91 93453 60656
            </div>
            <div className="foot-small" style={{ marginTop: 6 }}>
              <b>Address:</b> 368/4, Siva Nagar 2nd Street, Post Extn,
              <br />
              Poriyalar Nagar, Tiruppalai, Madurai, TN 625014
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          textAlign: "center",
          fontSize: 12,
          opacity: 0.4,
          paddingTop: 16,
          position: "relative",
          zIndex: 1,
        }}
      >
        © 2025 Innogreen India Marketing (IGIM). All rights reserved.
      </div>
    </footer>
  );
}
