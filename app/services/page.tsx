import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services — IGIM",
  description: "Practical crop support, nutrition planning, and field guidance — backed by IGIM product knowledge and regional experience.",
}

export default function ServicesPage() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>Agro Consulting &amp; Services</h1>
              <p>
                Practical crop support, nutrition planning, and field guidance —
                backed by IGIM product knowledge and regional experience across
                Tamil Nadu &amp; Kerala.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
                <Link className="btn btn-primary" href="/">Book via Smart Enquiry</Link>
                <a className="btn btn-secondary" href="tel:+919345360656">Call Now</a>
                <a className="btn btn-link" href="#how">How it works</a>
              </div>
              <div className="pills-row" style={{ marginTop: 12 }}>
                <span className="pill">Field visits</span>
                <span className="pill">Nutrition planning</span>
                <span className="pill">Problem diagnosis</span>
                <span className="pill">Dealer support</span>
              </div>
            </div>
            <aside className="panel">
              <div className="badge">What to send</div>
              <ul className="small muted" style={{ margin: 0, paddingLeft: 18 }}>
                <li>Crop + stage</li>
                <li>District / location</li>
                <li>Issue description</li>
                <li>Photos (if available)</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="section-title">
            <div>
              <h2>Service Areas</h2>
              <p>
                Services designed for practical field outcomes and responsible
                recommendations.
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="card span-6">
              <h3>Field Visit &amp; Crop Guidance</h3>
              <p>
                Crop stage assessment, field observation, and practical next-step
                support.
              </p>
            </div>
            <div className="card span-6">
              <h3>Nutrition Planning</h3>
              <p>
                Water-Soluble Fertilizers and micronutrient planning aligned with
                crop stage and field needs.
              </p>
            </div>
            <div className="card span-6">
              <h3>Pest &amp; Disease Support</h3>
              <p>
                Category-wise selection guidance aligned with compliance and label
                usage. (Responsible approach)
              </p>
            </div>
            <div className="card span-6">
              <h3>Dealer Support Services</h3>
              <p>
                Seasonal stocking guidance, coordination support, and portfolio
                planning help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="soft" id="how">
        <div className="container">
          <div className="section-title">
            <div>
              <h2>How it works</h2>
              <p>Smart Enquiry collects the right details and reduces spam.</p>
            </div>
          </div>
          <div className="timeline">
            <div className="step">
              <div className="num">1</div>
              <h4>Share details</h4>
              <p>Crop, stage, district, photos</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h4>Discussion</h4>
              <p>Call/WhatsApp confirmation</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h4>Plan</h4>
              <p>Category/product options</p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h4>Follow-up</h4>
              <p>Support and next steps</p>
            </div>
          </div>
          <div style={{ height: 18 }} />
          <div className="card">
            <div className="badge">Book Support</div>
            <p className="muted">
              Open Smart Enquiry and select &quot;Field Visit / Consulting Support&quot; in
              Need.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/">Open Smart Enquiry</Link>
              <Link className="btn btn-secondary" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
