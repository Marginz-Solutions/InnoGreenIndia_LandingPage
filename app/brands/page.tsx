import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brands — IGIM",
  description: "Premium portfolios supported through IGIM distribution, coordination, and technical guidance.",
}

export default function BrandsPage() {
  return (
    <section className="soft">
      <div className="container">
        <div className="section-title">
          <div>
            <h1>Brands</h1>
            <p>Premium portfolios supported through IGIM distribution, coordination, and technical guidance.</p>
          </div>
          <Link className="btn btn-primary" href="/">Smart Enquiry</Link>
        </div>
        <div className="grid">

          {/* FINOZEN */}
          <div className="card span-4">
            <div className="brand-logo-wrap">
              <Image src="/assets/logo/finozen-logo.svg" alt="FINOZEN" className="brand-card-img" width={120} height={60} />
            </div>
            <span className="meta" style={{ marginBottom: 10, display: "inline-block" }}>Water-Soluble Fertilizers</span>
            <p>Premium soluble nutrition for fertigation and foliar programs.</p>
            <span className="brand-tag-line">WSF portfolio supported through IGIM</span>
            <div className="actions">
              <a className="btn btn-primary btn-sm" href="https://finozen.co.in/" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                Visit Website
              </a>
              <a className="btn btn-secondary btn-sm" href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20FINOZEN%20price%20enquiry." target="_blank" rel="noopener">Enquire</a>
            </div>
          </div>

          {/* INNOGREEN */}
          <div className="card span-4">
            <div className="brand-logo-wrap">
              <Image src="/assets/logo/inno.png" alt="INNOGREEN" className="brand-card-img" width={120} height={60} />
            </div>
            <span className="meta" style={{ marginBottom: 10, display: "inline-block" }}>Bio-Inputs &amp; Micronutrients</span>
            <p>Bio-stimulants and micronutrient solutions for sustainable performance farming.</p>
            <span className="brand-tag-line">Performance farming through bio solutions</span>
            <div className="actions">
              <a className="btn btn-primary btn-sm" href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20INNOGREEN%20enquiry." target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                Explore
              </a>
              <a className="btn btn-secondary btn-sm" href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20INNOGREEN%20price%20enquiry." target="_blank" rel="noopener">Enquire</a>
            </div>
          </div>

          {/* MEENAKSHI AGRO */}
          <div className="card span-4">
            <div className="brand-logo-wrap">
              <Image src="/assets/logo/minakshi.png" alt="Meenakshi Agro Chemicals" className="brand-card-img" width={120} height={60} />
            </div>
            <span className="meta" style={{ marginBottom: 10, display: "inline-block" }}>Crop Protection (Pesticides)</span>
            <p>Crop protection products supporting major crops and regional field realities.</p>
            <span className="brand-tag-line">Crop Protection portfolio</span>
            <div className="actions">
              <a className="btn btn-primary btn-sm" href="https://macagrochemicals.com/" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                Visit Website
              </a>
              <a className="btn btn-secondary btn-sm" href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20Meenakshi%20price%20enquiry." target="_blank" rel="noopener">Enquire</a>
            </div>
          </div>

          {/* CTA row */}
          <div className="card span-12">
            <h3>Looking for another brand or specific SKU?</h3>
            <p>Use Smart Enquiry and mention the SKU/brand in the message field — we&apos;ll confirm availability and next steps.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/">Open Smart Enquiry</Link>
              <Link className="btn btn-secondary" href="/contact">Contact</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
