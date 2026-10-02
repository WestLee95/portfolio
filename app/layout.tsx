import "@/app/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from 'next';
import CustomCursor from "@/app/components/CustomCursor";


export const metadata: Metadata = {
  title: "Eugene Westley Mwambacha | Dev & Voice-Over Artist",
  description: "Frontend Engineer, Voice-Over Artist & Podcast Host",
  icons: {
    icon: [
      {
        url: '@/app/favicon.ico',
        type: 'image/svg+xml',
      sizes: '32x32', // SVG scales smoothly to 16x16 and 32x32
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}</body>
    </html>
  );
}