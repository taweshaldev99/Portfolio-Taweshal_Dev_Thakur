import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "../styles/global.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-family",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-family",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-family",
  display: "swap",
});

const SITE = "https://taweshaldev.com.np";
const TITLE = "Taweshal Dev Thakur | Python Developer & Data Engineering Enthusiast";
const DESCRIPTION =
  "Portfolio of Taweshal Dev Thakur, a Python developer and QA engineer in Kathmandu, Nepal, building ETL pipelines with Python, SQL and PostgreSQL on the road to Data Engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Taweshal Dev Thakur" }],
  creator: "Taweshal Dev Thakur",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Taweshal Dev Thakur",
    title: TITLE,
    description:
      "Python, SQL and PostgreSQL. QA engineer at Yoddha Lab, building data pipelines on the road to Data Engineering.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Taweshal Dev Thakur, Python Developer and Data Engineering Enthusiast" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Python, SQL and PostgreSQL. QA engineer at Yoddha Lab, building data pipelines on the road to Data Engineering.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taweshal Dev Thakur",
  url: SITE + "/",
  email: "mailto:dev2sl.py@gmail.com",
  telephone: "+977-9823348580",
  jobTitle: "Associate QA Engineer",
  worksFor: { "@type": "Organization", name: "Yoddha Lab Pvt. Ltd." },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Purbanchal University" },
  address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
  sameAs: [
    "https://github.com/taweshaldev99",
    "https://www.linkedin.com/in/taweshal-dev-thakur-656a8a273/",
    "https://www.hackerrank.com/profile/tweshaldev543",
    "https://www.instagram.com/itsdev.py/",
  ],
  knowsAbout: ["Python", "SQL", "PostgreSQL", "ETL", "Data Engineering", "Quality Assurance", "Pandas", "NumPy"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
