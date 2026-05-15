import Image from "next/image";

const brandLogos = [
  { src: "/assets/logo/finozen-logo.svg", alt: "FINOZEN" },
  { src: "/assets/logo/MIKUSU Logo.png", alt: "INNOGREEN" },
  { src: "/assets/logo/minakshi.png", alt: "Meenakshi Agro" },
  { src: "/assets/logo/main-logo.svg", alt: "FINOZEN" },
  { src: "/assets/logo/jigro.svg", alt: "INNOGREEN" },
  { src: "/assets/logo/logo_139524.png", alt: "Meenakshi Agro" },
  {
    src: "/assets/logo/FERTIGLOBAL_horizontal_white.png",
    alt: "FERTIGLOBAL",
    dark: true,
  },
  {
    src: "/assets/logo/cropped-CIL-Logo_WB-02-1-300x100.png",
    alt: "CIL",
    dark: true,
  },
  { src: "/assets/logo/navIcon.png", alt: "Nav" },
  { src: "/assets/logo/compo-expert-logo.svg", alt: "Compo Expert" },
  { src: "/assets/logo/kalash-logo.png", alt: "Kalash" },
];

export function TrustStrip() {
  // Duplicate logos for infinite scroll effect
  const allLogos = [...brandLogos, ...brandLogos.slice(0, 7)];

  return (
    <div className="trust">
      <div className="trust-track-wrap">
        <div className="trust-track" id="trustTrack">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="trust-item brand-logo-item"
              style={logo.dark ? { backgroundColor: "black" } : undefined}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
