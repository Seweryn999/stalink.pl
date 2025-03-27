import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Moja futurystyczna strona",
  description: "Opis strony...",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
