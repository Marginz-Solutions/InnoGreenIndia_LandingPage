import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact — IGIM",
  description: "Product availability, dealer price list, and technical support — Smart Enquiry is the recommended way to contact us.",
}

export default function ContactPage() {
  return (
    <section className="soft">
      <div className="container">
        <div className="section-title">
          <div>
            <h1>Contact IGIM</h1>
            <p>Product availability, dealer price list, and technical support — Smart Enquiry is the recommended way to contact us.</p>
          </div>
          <Link className="btn btn-primary" href="/">Smart Enquiry</Link>
        </div>

        <div className="grid">
          <div className="card span-6">
            <h3>Phone &amp; WhatsApp</h3>
            <p style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 900, color: "var(--g900)", margin: "0 0 6px", letterSpacing: "-0.5px" }}>+91 93453 60656</p>
            <p className="small muted" style={{ marginBottom: 16 }}>Coverage: Tamil Nadu &amp; Kerala (including Idukki)</p>
            <div className="contact-info-row">
              <span className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </span>
              <span className="small muted">368/4, Siva Nagar 2nd Street, Post Extn, Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu 625014</span>
            </div>
            <div className="actions" style={{ marginTop: 20 }}>
              <a className="btn btn-primary" href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20I%20need%20details." target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white"><path d="M16.004 3C9.374 3 4 8.373 4 15.004c0 2.645.86 5.087 2.313 7.063L5 29l7.144-1.27a11.96 11.96 0 003.86.633C22.626 28.363 28 22.99 28 16.36 28 9.73 22.626 4.356 16.004 4.356zm6.69 17.258c-.28.785-1.64 1.5-2.26 1.596-.578.086-1.31.123-2.115-.143-.49-.157-1.118-.365-1.933-.716-3.404-1.474-5.625-5.03-5.795-5.256-.168-.225-1.38-1.836-1.38-3.503 0-1.666.874-2.486 1.183-2.826.31-.34.678-.424.905-.424.227 0 .454.002.653.012.21.01.492-.08.77.588.28.67.95 2.316 1.035 2.483.084.168.14.366.028.59-.113.224-.17.364-.336.56-.168.196-.354.437-.505.586-.168.168-.344.35-.148.686.197.336.875 1.44 1.878 2.33 1.29 1.15 2.376 1.507 2.712 1.676.336.168.532.14.728-.084.196-.224.84-.98 1.064-1.316.224-.336.448-.28.756-.168.308.112 1.95.92 2.284 1.086.336.168.56.252.644.392.084.14.084.813-.196 1.598z"/></svg>
                WhatsApp Now
              </a>
              <a className="btn btn-secondary" href="tel:+919345360656">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Now
              </a>
            </div>
            <div className="actions" style={{ marginTop: 10 }}>
              <Link className="btn btn-secondary" href="/dealer-hub#pricelist">Request Dealer Price List</Link>
            </div>
          </div>

          <div className="card span-6" style={{ padding: 0, overflow: "hidden" }}>
            <div className="map-wrap">
              <iframe
                className="map-frame"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=368%2F4+Siva+Nagar+2nd+Street+Poriyalar+Nagar+Tiruppalai+Madurai+Tamil+Nadu+625014&output=embed&z=15"
                title="IGIM Office Location"
              />
            </div>
            <div className="map-footer">
              <div>
                <div className="small" style={{ fontWeight: 700, color: "var(--g900)" }}>IGIM Office</div>
                <div className="small muted">Tiruppalai, Madurai, TN 625014</div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <a className="btn btn-secondary btn-sm"
                   href="https://www.google.com/maps/dir/?api=1&destination=368%2F4+Siva+Nagar+2nd+Street+Poriyalar+Nagar+Tiruppalai+Madurai+Tamil+Nadu+625014"
                   target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  Directions
                </a>
                <a className="btn btn-primary btn-sm"
                   href="https://www.google.com/maps/search/368+Siva+Nagar+2nd+Street+Poriyalar+Nagar+Tiruppalai+Madurai+Tamil+Nadu+625014"
                   target="_blank" rel="noopener">Open in Maps</a>
              </div>
            </div>
          </div>

          <div className="card span-12">
            <h3>Fastest Support</h3>
            <p className="muted">Use Smart Enquiry — it includes district, category, and a short message, plus anti-spam checks.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/">Open Smart Enquiry</Link>
              <Link className="btn btn-secondary" href="/products">Browse Products</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
