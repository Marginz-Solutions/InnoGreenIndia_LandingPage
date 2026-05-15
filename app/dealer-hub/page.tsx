"use client"

import Link from "next/link"

export default function DealerHubPage() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>Dealer Partnership with IGIM</h1>
              <p>Reliable supply coordination, seasonal planning support, and quick response — built for dealers across <b>Tamil Nadu &amp; Kerala</b>.</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
                <a className="btn btn-primary" href="#apply">Apply for Dealership</a>
                <a className="btn btn-secondary" href="#pricelist">Request Dealer Price List</a>
                <Link className="btn btn-link" href="/">Smart Enquiry</Link>
              </div>
              <div className="pills-row" style={{ marginTop: 12 }}>
                <span className="pill">Supply reliability</span>
                <span className="pill">Transparent updates</span>
                <span className="pill">Fast coordination</span>
                <span className="pill">Dealer-first support</span>
              </div>
            </div>
            <aside className="panel">
              <div className="badge">Partner Support</div>
              <div className="small muted">For fastest onboarding, send firm details on WhatsApp (cooldown enabled to reduce spam).</div>
              <div style={{ height: 10 }} />
              <ul className="small muted" style={{ margin: 0, paddingLeft: 18 }}>
                <li>Seasonal stock planning support</li>
                <li>Category-wise portfolio guidance</li>
                <li>Coordination for dispatch timelines</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="section-title">
            <div>
              <h2>Why partner with IGIM</h2>
              <p>Built for dealer confidence: availability focus, coordination, and responsible guidance.</p>
            </div>
          </div>

          <div className="grid">
            <div className="card span-4"><h3>Supply Reliability</h3><p>Planned procurement and consistent availability focus.</p></div>
            <div className="card span-4"><h3>Fast Coordination</h3><p>Quick confirmation on availability, pricing and dispatch.</p></div>
            <div className="card span-4"><h3>Dealer Support</h3><p>Transparent communication and portfolio coordination.</p></div>
            <div className="card span-4"><h3>Season Planning</h3><p>Stock planning support for peak demand periods.</p></div>
            <div className="card span-4"><h3>Technical Guidance</h3><p>Practical selection support (responsible approach).</p></div>
            <div className="card span-4"><h3>Coverage</h3><p>Tamil Nadu &amp; Kerala market support.</p></div>
          </div>

          <div style={{ height: 20 }} />

          <div className="grid">
            <div className="card span-6" id="apply" style={{ alignSelf: "start" }}>
              <h3>Apply for Dealership</h3>
              <p className="muted">Send details on WhatsApp (cooldown protection enabled).</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
                <div className="field"><label>Firm Name</label><input placeholder="Firm / Shop" /></div>
                <div className="field"><label>GST Number</label><input placeholder="GST" /></div>
                <div className="field"><label>District</label><input placeholder="District" /></div>
                <div className="field">
                  <label>Category Interest</label>
                  <select>
                    <option>Water-Soluble Fertilizers</option>
                    <option>Bio-Inputs</option>
                    <option>Micronutrients</option>
                    <option>Pesticides</option>
                    <option>Consulting/Services</option>
                  </select>
                </div>
                <div className="field" style={{ gridColumn: "span 2" }}><label>Monthly Volume (optional)</label><input placeholder="Approx. movement" /></div>
              </div>
              <div className="actions">
                <a className="btn btn-primary" href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20I%20want%20to%20apply%20for%20dealership.%20Firm%3A%20____.%20GST%3A%20____.%20District%3A%20____.%20Interested%20Categories%3A%20____.%20Monthly%20Volume%3A%20____." target="_blank" rel="noopener">Send on WhatsApp</a>
                <Link className="btn btn-secondary" href="/contact">Contact</Link>
              </div>
            </div>

            <div className="card span-6" id="pricelist" style={{ alignSelf: "start" }}>
              <h3>Request Dealer Price List</h3>
              <p className="muted">Share firm name + GST + district. We&apos;ll respond with next steps.</p>
              <div className="actions" style={{ marginTop: 20 }}>
                <a className="btn btn-primary" href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20please%20share%20the%20Dealer%20Price%20List.%20Firm%20Name%3A%20____.%20GST%3A%20____.%20District%3A%20____.%20Categories%3A%20WSF%2FBio%2FMicro%2FPesticides." target="_blank" rel="noopener">Request via WhatsApp</a>
                <Link className="btn btn-secondary" href="/#smart">Smart Enquiry</Link>
              </div>
              <div className="small muted" style={{ marginTop: 12 }}>Note: Price list sharing is subject to dealer verification.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
