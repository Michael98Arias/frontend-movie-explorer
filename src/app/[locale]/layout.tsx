import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "Movie Explorer is an interactive platform powered by data from the TMDB API.",
};



export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>): Promise<JSX.Element> {

  return (
    <html lang={locale}>
      <head>
       <link rel="icon" href="/img/movie.png" /> 
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
