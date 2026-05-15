import Link from "next/link";

export function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1>Trusted Agro-Input Distribution for Dealers &amp; Farmers</h1>
            <p>
              Water-Soluble Fertilizers, Bio-Inputs, Micronutrients and Crop
              Protection — with reliable supply and practical technical support
              across <b>Tamil Nadu &amp; Kerala.</b>
            </p>
            <div className="hero-btns">
              <Link className="btn btn-primary" href="/#smart">
                Open Smart Enquiry
              </Link>
              <Link className="btn btn-secondary" href="/dealer-hub">
                Dealer Hub
              </Link>
              <Link className="btn btn-link" href="/products">
                Browse Products →
              </Link>
            </div>
            <div className="hero-pills">
              <span className="pill">Multi-brand distribution</span>
              <span className="pill">Quality-focused sourcing</span>
              <span className="pill">Fast dispatch coordination</span>
              <span className="pill">Technical guidance</span>
            </div>
          </div>
          <aside className="panel">
            <div className="badge">TN + Kerala Coverage</div>
            <h3 style={{ margin: "0 0 10px", fontSize: 16 }}>
              Distributor-grade support
            </h3>
            <ul className="small muted" style={{ margin: 0, paddingLeft: 18 }}>
              <li>Supply reliability and seasonal planning support</li>
              <li>Dealer coordination and transparent communication</li>
              <li>Category-wise product guidance (responsible use)</li>
              <li>Quick response workflow through Smart Enquiry</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
