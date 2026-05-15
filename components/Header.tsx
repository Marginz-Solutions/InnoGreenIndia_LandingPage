"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDrawer = () => {
    const drawer = document.getElementById("mobileDrawer");
    const hamburger = document.getElementById("hamburger");
    if (drawer) {
      drawer.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    if (hamburger) {
      hamburger.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
    }
  };

  return (
    <header
      className="header"
      style={{
        boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,.08)" : undefined,
        background: isScrolled
          ? "rgba(255,255,255,.98)"
          : "rgba(255,255,255,.94)",
      }}
    >
      <div className="container">
        <div className="nav">
          <Link className="brand" href="/">
            <Image
              src="/assets/IGIM_Logo.PNG"
              alt="IGIM Logo"
              width={44}
              height={44}
              priority
            />
            <div>
              <div className="name">Innogreen India Marketing</div>
              <div className="tag">Distributor • Trading • Technical Support</div>
            </div>
          </Link>

          <Navbar />

          <div className="cta">
            <Link className="btn btn-primary" href="/#smart">
              Smart Enquiry
            </Link>
            <a className="btn btn-secondary" href="tel:+919345360656">
              Call Now
            </a>
          </div>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Open menu"
            aria-expanded="false"
            onClick={openDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
