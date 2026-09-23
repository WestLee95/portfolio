import type { Metadata } from "next";

import "@/app/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";



export const metadata: Metadata = {
  title: "Eugene Westley Mwambacha | Dev & Voice-Over Artist",
  description: "Frontend Engineer, Voice-Over Artist & Podcast Host",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}