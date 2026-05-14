/* ═══════════════════════════════════════════════════════════════
   IGIM — main.js  (Responsive-ready overhaul)
   ═══════════════════════════════════════════════════════════════ */

/* ══ 1. CONFIG ══ */
const WHATSAPP_NUMBER  = "919345360656";
const COOLDOWN_SECONDS = 60;
const WA_LAST_KEY      = "igim_wa_last_ts";

function nowMs()   { return Date.now(); }
function secsLeft() {
  const last = parseInt(localStorage.getItem(WA_LAST_KEY) || "0", 10);
  return Math.max(0, COOLDOWN_SECONDS - Math.floor((nowMs() - last) / 1000));
}
function setLast() { localStorage.setItem(WA_LAST_KEY, String(nowMs())); }
function encodeWA(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
function tryOpenWhatsApp(url) {
  const left = secsLeft();
  if (left > 0) { alert(`Please wait ${left} seconds before sending another enquiry.`); return false; }
  setLast();
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}

/* ══ 2. AVAILABILITY PULSE ══ */
const PULSE = {
  updatedLabel:  "Updated twice-weekly",
  coverageLabel: "Tamil Nadu & Kerala (including Idukki)",
  dispatchLabel: "Fast dispatch coordination",
  items: [
    { key: "WSF (FINOZEN)",                status: "good",    text: "✅ Good Stock" },
    { key: "Bio (INNOGREEN)",              status: "ok",      text: "✅ Available" },
    { key: "Micronutrients (INNOGREEN)",   status: "limited", text: "⚠ Limited (seasonal)" },
    { key: "Crop Protection (Pesticides)", status: "ok",      text: "✅ Available" },
    { key: "Agro Consulting & Services",   status: "ok",      text: "✅ Available (book slot)" }
  ]
};

const CATEGORY_TO_BRAND = {
  "Water-Soluble Fertilizers (WSF)": ["FINOZEN", "Other / Ask IGIM"],
  "Bio-Inputs":                      ["INNOGREEN", "Other / Ask IGIM"],
  "Micronutrients":                  ["INNOGREEN", "Other / Ask IGIM"],
  "Crop Protection (Pesticides)":    ["Meenakshi Agro Chemicals", "Other / Ask IGIM"],
  "Agro Consulting & Services":      ["INNOGREEN / IGIM Services"]
};

function qs(id) { return document.getElementById(id); }

function renderPulse() {
  const root = qs("pulseRoot");
  if (!root) return;

  const sc = { good: "status-good", ok: "status-ok", limited: "status-limited", out: "status-out" };
  const itemsHtml = PULSE.items.map(it => `
    <div class="pulse-item">
      <div class="k">${it.key}</div>
      <div class="v"><span class="${sc[it.status] || ''}">${it.text}</span></div>
    </div>
  `).join("");

  const waAvail = encodeWA("Hi IGIM, please confirm availability. District: ____. Who: ____. Category: ____.");
  const waPrice = encodeWA("Hi IGIM, please share the Dealer Price List. Firm: ____. GST: ____. District: ____. Categories: WSF/Bio/Micro/Pesticides.");

  root.innerHTML = `
    <div class="card">
      <div class="badge">Today's Availability Pulse</div>
      <div class="small muted">${PULSE.updatedLabel} • Coverage: ${PULSE.coverageLabel}</div>
      <div style="margin-top:12px" class="pulse-table">${itemsHtml}</div>
      <div style="margin-top:12px" class="small muted">Dispatch: ${PULSE.dispatchLabel}. Confirm SKU via Smart Enquiry.</div>
      <div class="actions">
        <a class="btn btn-primary" href="#smart">Open Smart Enquiry</a>
        <a class="btn btn-secondary" data-wa-link="${waPrice}" href="javascript:void(0)">Request Dealer Price List</a>
      </div>
    </div>
  `;
}

/* ══ 3. SMART ENQUIRY ══ */
function setupSmartEnquiry() {
  const category = qs("seCategory");
  const brand    = qs("seBrand");
  const sendBtn  = qs("seSend");
  if (!category || !brand || !sendBtn) return;

  const refreshBrands = () => {
    const list = CATEGORY_TO_BRAND[category.value] || ["Other / Ask IGIM"];
    brand.innerHTML = list.map(b => `<option value="${b}">${b}</option>`).join("");
  };
  category.addEventListener("change", refreshBrands);
  refreshBrands();

  sendBtn.addEventListener("click", () => {
    const district = (qs("seDistrict")?.value || "").trim();
    const need     = (qs("seNeed")?.value || "").trim();
    const mathAns  = (qs("seMath")?.value || "").trim();
    const confirmed = qs("seConfirm")?.checked;

    if (!district || !need) { alert("Please select District and Need."); return; }
    if (mathAns !== "7")    { alert("Please answer the quick check: 3 + 4 = ?"); return; }
    if (!confirmed)          { alert("Please confirm this is a genuine enquiry."); return; }

    const who   = (document.querySelector('input[name="seWho"]:checked') || {}).value || "Dealer";
    const cat   = category.value || "";
    const br    = brand.value    || "";
    const crop  = (qs("seCrop")?.value  || "").trim();
    const stage = (qs("seStage")?.value || "").trim();
    const msg   = (qs("seMsg")?.value   || "").trim();

    let text =
`Hi IGIM, I am a ${who}.
Category: ${cat}
Brand preference: ${br}
District: ${district}
Need: ${need}`;
    if (crop)  text += `\nCrop: ${crop}`;
    if (stage) text += `\nStage: ${stage}`;
    if (msg)   text += `\nMessage: ${msg}`;
    text += `\n\nPlease share availability and next steps.`;

    tryOpenWhatsApp(encodeWA(text));
  });

  const clearBtn = qs("seClear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (qs("seDistrict"))  qs("seDistrict").value   = "";
      if (qs("seNeed"))      qs("seNeed").value        = "Price & Availability";
      if (qs("seCrop"))      qs("seCrop").value        = "";
      if (qs("seStage"))     qs("seStage").value       = "";
      if (qs("seMsg"))       qs("seMsg").value         = "";
      if (qs("seMath"))      qs("seMath").value        = "";
      if (qs("seConfirm"))   qs("seConfirm").checked   = false;
      category.value = "Water-Soluble Fertilizers (WSF)";
      refreshBrands();
      document.querySelectorAll('input[name="seWho"]').forEach(r => r.checked = (r.value === "Dealer"));
    });
  }
}

/* ══ 4. ATTACH COOLDOWN LINKS ══ */
function attachCooldownToLinks() {
  document.querySelectorAll("[data-wa-link]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      const url = el.getAttribute("data-wa-link");
      if (url) tryOpenWhatsApp(url);
    });
  });
}

/* ══ 5. NAVBAR & DRAWER ══ */
const hamburger    = document.getElementById("hamburger");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerClose  = document.getElementById("drawerClose");
const headerEl     = document.querySelector(".header");

function openDrawer() {
  if (!mobileDrawer) return;
  mobileDrawer.classList.add("open");
  hamburger?.classList.add("open");
  hamburger?.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  if (!mobileDrawer) return;
  mobileDrawer.classList.remove("open");
  hamburger?.classList.remove("open");
  hamburger?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

hamburger?.addEventListener("click", e => { e.stopPropagation(); openDrawer(); });
drawerClose?.addEventListener("click", closeDrawer);
mobileDrawer?.addEventListener("click", e => { if (e.target === mobileDrawer) closeDrawer(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

/* Close drawer + smooth scroll on nav link */
document.querySelectorAll(".drawer-nav a, .menu a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      closeDrawer();
      const target = document.querySelector(href);
      if (target && headerEl) {
        const offset = headerEl.offsetHeight + 8;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else if (href === "#") {
      e.preventDefault();
      closeDrawer();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      closeDrawer();
    }
  });
});

/* Header shadow on scroll */
if (headerEl) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      headerEl.style.boxShadow  = "0 2px 20px rgba(0,0,0,.08)";
      headerEl.style.background = "rgba(255,255,255,.98)";
    } else {
      headerEl.style.boxShadow  = "";
      headerEl.style.background = "rgba(255,255,255,.94)";
    }
  }, { passive: true });
}

/* ══ 6. SCROLL REVEAL ══ */
if ("IntersectionObserver" in window) {
  const revealObs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("vis");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale")
    .forEach(el => revealObs.observe(el));
}

/* ══ 7. READ PROGRESS ══ */
const progressBar = qs("read-progress");
if (progressBar) {
  window.addEventListener("scroll", () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = Math.min(pct, 100) + "%";
  }, { passive: true });
}

/* ══ 8. SCROLL-TO-TOP ══ */
const st = qs("scrollTop");
if (st) {
  window.addEventListener("scroll", () => st.classList.toggle("show", window.scrollY > 400), { passive: true });
  st.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ══ 9. ANIMATED COUNTERS ══ */
if ("IntersectionObserver" in window) {
  const cntObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.target);
      if (isNaN(target)) return;
      let v = 0;
      const dur = 1400, step = 16;
      const timer = setInterval(() => {
        v = Math.min(v + target / (dur / step), target);
        el.textContent = Math.round(v);
        if (v >= target) { el.textContent = target; clearInterval(timer); }
      }, step);
      cntObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-target]").forEach(el => cntObs.observe(el));
}

/* ══ 10. BUTTON RIPPLE ══ */
document.addEventListener("click", e => {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const r = document.createElement("span");
  r.className = "ripple-el";
  const rect = btn.getBoundingClientRect();
  const sz   = Math.max(rect.width, rect.height);
  r.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX - rect.left - sz/2}px;top:${e.clientY - rect.top - sz/2}px`;
  btn.appendChild(r);
  setTimeout(() => r.remove(), 600);
});

/* ══ 11. CARD TILT ON HOVER (desktop only) ══ */
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".prod-card,.brand-spot,.svc-card,.test-card").forEach(card => {
    card.addEventListener("mousemove", function(e) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      this.style.transform = `translateY(-6px) perspective(600px) rotateX(${-y*6}deg) rotateY(${x*6}deg)`;
    });
    card.addEventListener("mouseleave", function() { this.style.transform = ""; });
  });
}

/* ══ INIT ══ */
document.addEventListener("DOMContentLoaded", () => {
  renderPulse();
  attachCooldownToLinks();
  setupSmartEnquiry();
});