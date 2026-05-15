import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products — IGIM",
  description: "Browse categories and use Smart Enquiry for price & availability.",
}

export default function ProductsPage() {
  return (
    <section>
      <div className="container">
        <div className="section-title">
          <div>
            <h1>Products</h1>
            <p>Browse categories and use Smart Enquiry for price &amp; availability. This avoids spam and ensures structured requests.</p>
          </div>
          <Link className="btn btn-primary" href="/">Smart Enquiry</Link>
        </div>

        <div style={{ height: 18 }} />

        <div className="grid">
          <div className="card span-4" style={{ position: "sticky", top: 80, alignSelf: "start" }}>
            <h3 style={{ marginBottom: 8 }}>Filter Products</h3>
            <p className="muted" style={{ fontSize: 13 }}>Use filters or Smart Enquiry to request a specific product.</p>
            <div style={{ marginTop: 12 }}>
              <label>Category</label>
              <select>
                <option>All</option>
                <option>Water-Soluble Fertilizers (WSF)</option>
                <option>Bio-Inputs</option>
                <option>Micronutrients</option>
                <option>Crop Protection (Pesticides)</option>
                <option>Agro Consulting &amp; Services</option>
              </select>
            </div>
            <div style={{ marginTop: 10 }}>
              <label>Brand</label>
              <select>
                <option>All</option>
                <option>FINOZEN</option>
                <option>INNOGREEN</option>
                <option>Meenakshi Agro Chemicals</option>
                <option>Other / Ask IGIM</option>
              </select>
            </div>
            <div style={{ marginTop: 10 }}>
              <label>Search</label>
              <input placeholder="Type product name…" />
            </div>
            <div className="actions">
              <Link className="btn btn-primary" href="/">Open Smart Enquiry</Link>
              <Link className="btn btn-secondary" href="/brands">View Brands</Link>
            </div>
          </div>

          <div className="span-8">
            <div className="grid">
              <div className="card span-6">
                <h3>Water-Soluble Fertilizers (WSF)</h3>
                <p>Premium soluble nutrition for fertigation and foliar programs.</p>
                <div className="meta">Brand focus: <b>FINOZEN</b></div>
                <div className="actions">
                  <Link className="btn btn-primary" href="/">Enquire via Smart Enquiry</Link>
                  <Link className="btn btn-secondary" href="/brands">Brand page</Link>
                </div>
              </div>
              <div className="card span-6">
                <h3>Bio-Inputs</h3>
                <p>Bio-stimulants and biological solutions for sustainable performance.</p>
                <div className="meta">Brand focus: <b>INNOGREEN</b></div>
                <div className="actions">
                  <Link className="btn btn-primary" href="/">Enquire via Smart Enquiry</Link>
                  <Link className="btn btn-secondary" href="/brands">Brand page</Link>
                </div>
              </div>
              <div className="card span-6">
                <h3>Micronutrients</h3>
                <p>Chelates and micronutrient solutions for crop stage-wise needs.</p>
                <div className="meta">Brand focus: <b>INNOGREEN</b></div>
                <div className="actions">
                  <Link className="btn btn-primary" href="/">Enquire via Smart Enquiry</Link>
                  <Link className="btn btn-secondary" href="/brands">Brand page</Link>
                </div>
              </div>
              <div className="card span-6">
                <h3>Crop Protection (Pesticides)</h3>
                <p>Insecticides and fungicides for region-specific pest pressure zones.</p>
                <div className="meta">Brand focus: <b>Meenakshi Agro Chemicals</b></div>
                <div className="actions">
                  <Link className="btn btn-primary" href="/">Enquire via Smart Enquiry</Link>
                  <Link className="btn btn-secondary" href="/brands">Brand page</Link>
                </div>
              </div>
              <div className="card span-12">
                <h3>Need exact price &amp; availability?</h3>
                <p>Use Smart Enquiry — it collects district, category, and requirement, then sends one structured WhatsApp message.</p>
                <div className="actions">
                  <Link className="btn btn-primary" href="/">Open Smart Enquiry</Link>
                  <Link className="btn btn-secondary" href="/dealer-hub">Dealer Hub</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
