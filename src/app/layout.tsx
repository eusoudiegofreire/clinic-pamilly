import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import {
  siteConfig,
  offer,
  faq,
  aboutDoctor,
  SITE_URL,
} from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.doctorShort} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.doctorShort}`,
  },
  description: siteConfig.description,
  keywords: [
    "imunidade infantil",
    "consulta pediátrica online",
    "criança vive doente",
    "gripe atrás da outra",
    "alergista imunologista infantil",
    "Dra. Pâmilly",
    "Dra. Pâmilly Barzzotto",
    "Life Clinic",
  ],
  authors: [{ name: siteConfig.doctor }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
    title: `${siteConfig.doctorShort} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.doctor} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.doctorShort} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "MedicalClinic"],
      "@id": `${SITE_URL}/#clinic`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: SITE_URL,
      medicalSpecialty: ["Pediatric", "Allergy", "Immunology"],
      areaServed: { "@type": "Country", name: "Brasil" },
      availableService: {
        "@type": "MedicalTherapy",
        name: offer.title,
      },
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: siteConfig.doctor,
      description: aboutDoctor.role,
      medicalSpecialty: ["Pediatric", "Allergy", "Immunology"],
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      url: SITE_URL,
    },
    {
      "@type": "Offer",
      name: offer.title,
      price: "680.00",
      priceCurrency: "BRL",
      category: "MedicalConsultation",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: offer.title,
        howPerformed: offer.items.join("; "),
      },
      url: SITE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-white font-body text-primary">
        {children}
      </body>
    </html>
  );
}
