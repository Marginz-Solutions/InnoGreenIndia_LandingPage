import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dealer Hub — IGIM",
  description: "Reliable supply coordination, seasonal planning support, and quick response — built for dealers across Tamil Nadu & Kerala.",
}

export default function DealerHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
