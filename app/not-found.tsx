import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <svg height="100" width="100" aria-hidden="true">
          <polygon
            points="50,25 17,80 82,80"
            strokeLinejoin="round"
            style={{
              fill: "none",
              stroke: "#ff8a00",
              strokeWidth: 8,
            }}
          />
          <text
            x="42"
            y="74"
            fill="#ff8a00"
            fontFamily="sans-serif"
            fontWeight="900"
            fontSize="42px"
          >
            !
          </text>
        </svg>

        <h1 className="not-found-title">File not found (404 error)</h1>

        <p className="not-found-lead">
          If you think what you&apos;re looking for should be here, please contact the site owner.
        </p>

        <Link href="/" className="not-found-link">
          Go back to Home
        </Link>
      </div>
    </main>
  );
}
