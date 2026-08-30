import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nehru Usare - Senior Backend Engineer",
  description: "Senior Backend Software Engineer specializing in Java, Spring Boot, Kafka, and distributed systems. Building scalable, high-throughput backend architectures.",
  keywords: ["Backend Engineer", "Java", "Spring Boot", "Kafka", "Microservices", "Distributed Systems"],
  authors: [{ name: "Nehru Usare" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nehruusare.dev",
    title: "Nehru Usare - Senior Backend Engineer",
    description: "Senior Backend Software Engineer specializing in Java, Spring Boot, Kafka, and distributed systems.",
    images: [
      {
        url: "https://nehruusare.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nehru Usare Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehru Usare - Senior Backend Engineer",
    description: "Senior Backend Software Engineer specializing in Java, Spring Boot, Kafka, and distributed systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-dark-900 text-dark-100 antialiased">
        {children}
      </body>
    </html>
  );
}
