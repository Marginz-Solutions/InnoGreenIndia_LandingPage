"use client";

import { useState, useCallback } from "react";

const WHATSAPP_NUMBER = "919345360656";
const COOLDOWN_SECONDS = 60;
const WA_LAST_KEY = "igim_wa_last_ts";

const CATEGORY_TO_BRAND: Record<string, string[]> = {
  "Water-Soluble Fertilizers (WSF)": ["FINOZEN", "Other / Ask IGIM"],
  "Bio-Inputs": ["INNOGREEN", "Other / Ask IGIM"],
  Micronutrients: ["INNOGREEN", "Other / Ask IGIM"],
  "Crop Protection (Pesticides)": ["Meenakshi Agro Chemicals", "Other / Ask IGIM"],
  "Agro Consulting & Services": ["INNOGREEN / IGIM Services"],
};

const CATEGORIES = Object.keys(CATEGORY_TO_BRAND);

const DISTRICTS = {
  "South TN": [
    "Madurai",
    "Dindigul",
    "Theni",
    "Virudhunagar",
    "Sivagangai",
    "Ramanathapuram",
    "Tirunelveli",
    "Tenkasi",
    "Thoothukudi",
  ],
  "West / Kongu TN": [
    "Coimbatore",
    "Tiruppur",
    "Erode",
    "Salem",
    "Namakkal",
    "Dharmapuri",
    "Krishnagiri",
    "Hosur",
  ],
  "Central / Delta TN": [
    "Trichy",
    "Thanjavur",
    "Tiruvarur",
    "Nagapattinam",
    "Cuddalore",
    "Villupuram",
    "Kallakurichi",
  ],
  "North TN": [
    "Chennai",
    "Kancheepuram",
    "Tiruvallur",
    "Chengalpattu",
    "Vellore",
    "Ranipet",
    "Tirupattur",
  ],
  Kerala: ["Idukki"],
};

const NEEDS = [
  "Price & Availability",
  "Dealer Price List",
  "Bulk Requirement / Dispatch",
  "Product Recommendation (category-wise)",
  "Field Visit / Consulting Support",
  "Complaint / Support",
];

const CROPS = [
  "Tomato",
  "Chilli",
  "Brinjal",
  "Banana",
  "Coconut",
  "Rose",
  "Onion",
  "Beans",
  "Cabbage/Cauliflower",
  "Paddy",
  "Sugarcane",
  "Others",
];

const STAGES = ["Nursery", "Vegetative", "Flowering", "Fruiting", "Harvest", "General"];

export function SmartEnquiry() {
  const [who, setWho] = useState("Dealer");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [brand, setBrand] = useState(CATEGORY_TO_BRAND[CATEGORIES[0]][0]);
  const [district, setDistrict] = useState("");
  const [need, setNeed] = useState(NEEDS[0]);
  const [crop, setCrop] = useState("");
  const [stage, setStage] = useState("");
  const [message, setMessage] = useState("");
  const [mathAnswer, setMathAnswer] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    const brands = CATEGORY_TO_BRAND[newCategory] || ["Other / Ask IGIM"];
    setBrand(brands[0]);
  };

  const secsLeft = useCallback(() => {
    if (typeof window === "undefined") return 0;
    const last = parseInt(localStorage.getItem(WA_LAST_KEY) || "0", 10);
    return Math.max(0, COOLDOWN_SECONDS - Math.floor((Date.now() - last) / 1000));
  }, []);

  const handleSubmit = () => {
    if (!district || !need) {
      alert("Please select District and Need.");
      return;
    }
    if (mathAnswer !== "7") {
      alert("Please answer the quick check: 3 + 4 = ?");
      return;
    }
    if (!confirmed) {
      alert("Please confirm this is a genuine enquiry.");
      return;
    }

    const left = secsLeft();
    if (left > 0) {
      alert(`Please wait ${left} seconds before sending another enquiry.`);
      return;
    }

    let text = `Hi IGIM, I am a ${who}.
Category: ${category}
Brand preference: ${brand}
District: ${district}
Need: ${need}`;
    if (crop) text += `\nCrop: ${crop}`;
    if (stage) text += `\nStage: ${stage}`;
    if (message) text += `\nMessage: ${message}`;
    text += `\n\nPlease share availability and next steps.`;

    localStorage.setItem(WA_LAST_KEY, String(Date.now()));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleClear = () => {
    setWho("Dealer");
    setCategory(CATEGORIES[0]);
    setBrand(CATEGORY_TO_BRAND[CATEGORIES[0]][0]);
    setDistrict("");
    setNeed(NEEDS[0]);
    setCrop("");
    setStage("");
    setMessage("");
    setMathAnswer("");
    setConfirmed(false);
  };

  return (
    <section id="smart">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>IGIM Smart Enquiry</h2>
            <p>
              Answer a few questions — we respond faster with availability and
              next steps. Includes a quick check + cooldown to reduce spam.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="radio-row" style={{ marginBottom: 14 }}>
            {["Dealer", "Farmer", "Consultant/Other"].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="seWho"
                  value={option}
                  checked={who === option}
                  onChange={(e) => setWho(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="seCategory">Category *</label>
              <select
                id="seCategory"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="seBrand">Brand (auto) *</label>
              <select
                id="seBrand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                {(CATEGORY_TO_BRAND[category] || ["Other / Ask IGIM"]).map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="seDistrict">District *</label>
              <select
                id="seDistrict"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value="">Select district</option>
                {Object.entries(DISTRICTS).map(([region, districts]) => (
                  <optgroup key={region} label={region}>
                    {districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="seNeed">Need *</label>
              <select
                id="seNeed"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
              >
                {NEEDS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="seCrop">Crop (optional)</label>
              <select
                id="seCrop"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
              >
                <option value="">Select crop</option>
                {CROPS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="seStage">Crop Stage (optional)</label>
              <select
                id="seStage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
              >
                <option value="">Select stage</option>
                {STAGES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="field full">
              <label htmlFor="seMsg">Message (optional)</label>
              <textarea
                id="seMsg"
                placeholder="Example: Need FINOZEN WSF for fertigation on tomato. Looking for fast dispatch."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="field">
              <label htmlFor="seMath">Quick check * (3 + 4 = ?)</label>
              <input
                id="seMath"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter answer"
                value={mathAnswer}
                onChange={(e) => setMathAnswer(e.target.value)}
              />
            </div>
            <div className="field" style={{ display: "flex", alignItems: "flex-end" }}>
              <label
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  margin: 0,
                  textTransform: "none",
                  letterSpacing: 0,
                  cursor: "pointer",
                }}
              >
                <input
                  id="seConfirm"
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  style={{
                    width: "auto",
                    margin: 0,
                    cursor: "pointer",
                    accentColor: "var(--g700)",
                  }}
                />
                <span
                  className="small"
                  style={{ color: "var(--text-900)", fontWeight: 700 }}
                >
                  I confirm this is a genuine enquiry.
                </span>
              </label>
            </div>
          </div>
          <div className="actions">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Send on WhatsApp
            </button>
            <button className="btn btn-secondary" type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
          <div className="small muted" style={{ marginTop: 10 }}>
            Note: We share guidance responsibly. Use products as per label and
            local regulations.
          </div>
        </div>
      </div>
    </section>
  );
}
