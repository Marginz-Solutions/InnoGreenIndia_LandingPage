"use client";

import Link from "next/link";

const PULSE = {
  updatedLabel: "Updated twice-weekly",
  coverageLabel: "Tamil Nadu & Kerala (including Idukki)",
  dispatchLabel: "Fast dispatch coordination",
  items: [
    { key: "WSF (FINOZEN)", status: "good", text: "Good Stock" },
    { key: "Bio (INNOGREEN)", status: "ok", text: "Available" },
    { key: "Micronutrients (INNOGREEN)", status: "limited", text: "Limited (seasonal)" },
    { key: "Crop Protection (Pesticides)", status: "ok", text: "Available" },
    { key: "Agro Consulting & Services", status: "ok", text: "Available (book slot)" },
  ],
};

const statusClasses: Record<string, string> = {
  good: "status-good",
  ok: "status-ok",
  limited: "status-limited",
  out: "status-out",
};

const statusEmojis: Record<string, string> = {
  good: "✅",
  ok: "✅",
  limited: "⚠",
  out: "❌",
};

export function AvailabilityPulse() {
  return (
    <section className="soft" style={{ padding: "18px 0" }}>
      <div className="container">
        <div className="card">
          <div className="badge">{"Today's Availability Pulse"}</div>
          <div className="small muted">
            {PULSE.updatedLabel} • Coverage: {PULSE.coverageLabel}
          </div>
          <div className="pulse-table" style={{ marginTop: 12 }}>
            {PULSE.items.map((item, index) => (
              <div key={index} className="pulse-item">
                <div className="k">{item.key}</div>
                <div className="v">
                  <span className={statusClasses[item.status] || ""}>
                    {statusEmojis[item.status]} {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="small muted" style={{ marginTop: 12 }}>
            Dispatch: {PULSE.dispatchLabel}. Confirm SKU via Smart Enquiry.
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href="#smart">
              Open Smart Enquiry
            </Link>
            <a
              className="btn btn-secondary"
              href="https://wa.me/919345360656?text=Hi%20IGIM%2C%20please%20share%20the%20Dealer%20Price%20List.%20Firm%3A%20____.%20GST%3A%20____.%20District%3A%20____.%20Categories%3A%20WSF%2FBio%2FMicro%2FPesticides."
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Dealer Price List
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
