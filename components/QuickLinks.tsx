import Link from "next/link";

export function QuickLinks() {
  return (
    <section className="soft">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>Quick Links</h2>
            <p>Start with products, brands, or dealer partnership.</p>
          </div>
        </div>
        <div className="grid">
          <div className="card span-4">
            <h3>Products</h3>
            <p>Browse category-wise products and brand focus.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/products">
                Open Products
              </Link>
              <Link className="btn btn-secondary" href="/#smart">
                Smart Enquiry
              </Link>
            </div>
          </div>
          <div className="card span-4">
            <h3>Brands</h3>
            <p>FINOZEN, INNOGREEN, Meenakshi Agro Chemicals.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/brands">
                Open Brands
              </Link>
              <Link className="btn btn-secondary" href="/#smart">
                Smart Enquiry
              </Link>
            </div>
          </div>
          <div className="card span-4">
            <h3>Dealer Hub</h3>
            <p>Apply for dealership or request dealer price list.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/dealer-hub">
                Dealer Hub
              </Link>
              <Link className="btn btn-secondary" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
