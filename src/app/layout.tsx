import "./globals.css";
import { ReactNode } from "react";
import StarsBackground from "../components/ui/StarsBackground";

export const metadata = {
  title: "Stalink",
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
      <body className="relative text-white overflow-x-hidden min-h-screen bg-black">
        <StarsBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
