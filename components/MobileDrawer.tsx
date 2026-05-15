"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks } from "./Navbar";

export function MobileDrawer() {
  const pathname = usePathname();

  const closeDrawer = () => {
    const drawer = document.getElementById("mobileDrawer");
    const hamburger = document.getElementById("hamburger");
    if (drawer) {
      drawer.classList.remove("open");
      document.body.style.overflow = "";
    }
    if (hamburger) {
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeDrawer();
    }
  };

  return (
    <div
      className="mobile-drawer"
      id="mobileDrawer"
      onClick={handleBackdropClick}
    >
      <div className="drawer-panel">
        <div className="drawer-head">
          <Link className="brand" href="/" onClick={closeDrawer}>
            <Image
              src="/assets/IGIM_Logo.PNG"
              alt="IGIM Logo"
              width={44}
              height={44}
            />
            <div>
              <div className="name">Innogreen India Marketing</div>
              <div className="tag">Distributor • Trading • Technical Support</div>
            </div>
          </Link>
          <button
            className="drawer-close"
            id="drawerClose"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            ✕
          </button>
        </div>
        <nav className="drawer-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={closeDrawer}
            >
              <span className="nav-dot"></span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-btns">
          <Link className="btn btn-primary" href="/#smart" onClick={closeDrawer}>
            Smart Enquiry
          </Link>
          <a className="btn btn-secondary" href="tel:+919345360656">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
