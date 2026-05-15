import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — IGIM",
  description: "Founded in 2021 as a distribution, trading, and crop protection support company. ISO 9001:2015 certified.",
}

export default function AboutPage() {
  return (
    <section>
      <div className="container">
        <div className="section-title">
          <div>
            <h1>About Innogreen India Marketing (IGIM)</h1>
            <p>Founded in 2021 as a distribution, trading, and crop protection support company. ISO 9001:2015 certified, multi-brand agro-input distributor serving dealers and progressive farmers across Tamil Nadu and Kerala.</p>
          </div>
          <Link className="btn btn-primary" href="/#smart">Smart Enquiry</Link>
        </div>

        <div className="grid">
          <div className="card span-6">
            <h3>Who we are</h3>
            <p>We supply key agro-input categories including Water-Soluble Fertilizers (WSF), Bio-Inputs, Micronutrients, Crop Protection products, and Agro Consulting &amp; Services.</p>
            <p className="muted">Our focus: dependable availability, correct category selection, and responsible guidance.</p>
          </div>
          <div className="card span-6">
            <h3>Coverage</h3>
            <p>All major agriculture districts across Tamil Nadu and Kerala.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <span className="pill">Tamil Nadu</span>
              <span className="pill">Kerala</span>
            </div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="section-title">
          <div>
            <h2>Brand Focus</h2>
            <p>Core brand portfolios supported through IGIM coordination.</p>
          </div>
        </div>

        <div className="grid">
          <div className="card span-4">
            <div className="brand-logo-wrap">
              <Image src="/assets/logo/finozen-logo.svg" alt="FINOZEN" className="brand-card-img" width={120} height={60} />
            </div>
            <span className="meta" style={{ marginBottom: 8, display: "inline-block" }}>Water-Soluble Fertilizers</span>
            <p>WSF portfolio for fertigation and foliar programs across TN &amp; Kerala.</p>
            <div className="actions">
              <a className="btn btn-primary btn-sm" href="https://finozen.co.in/" target="_blank" rel="noopener">Visit Website</a>
              <Link className="btn btn-secondary btn-sm" href="/brands">Learn More</Link>
            </div>
          </div>
          <div className="card span-4">
            <div className="brand-logo-wrap">
              <Image src="/assets/logo/inno.png" alt="INNOGREEN" className="brand-card-img" width={120} height={60} />
            </div>
            <span className="meta" style={{ marginBottom: 8, display: "inline-block" }}>Bio-Inputs &amp; Micronutrients</span>
            <p>Bio-stimulants and micronutrient solutions for performance farming.</p>
            <div className="actions">
              <Link className="btn btn-primary btn-sm" href="/">Smart Enquiry</Link>
              <Link className="btn btn-secondary btn-sm" href="/services">Services</Link>
            </div>
          </div>
          <div className="card span-4">
            <div className="brand-logo-wrap">
              <Image src="/assets/logo/minakshi.png" alt="Meenakshi Agro Chemicals" className="brand-card-img" width={120} height={60} />
            </div>
            <span className="meta" style={{ marginBottom: 8, display: "inline-block" }}>Crop Protection (Pesticides)</span>
            <p>Crop protection products supporting major crops and field realities.</p>
            <div className="actions">
              <a className="btn btn-primary btn-sm" href="https://macagrochemicals.com/" target="_blank" rel="noopener">Visit Website</a>
              <Link className="btn btn-secondary btn-sm" href="/products">Products</Link>
            </div>
          </div>
        </div>

        <div style={{ height: 18 }} />

        <div className="card">
          <div className="badge">Contact</div>
          <p className="muted">Need pricing, availability, or technical support? Use Smart Enquiry or call us.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/">Smart Enquiry</Link>
            <a className="btn btn-secondary" href="tel:+919345360656">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
