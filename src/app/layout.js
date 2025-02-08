import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webstore",
  description: "Welcome to WebStore – Your Ultimate Electronics Destination! At WebStore, we bring you the latest and greatest in electronics, from high-quality headphones and smartphones to a wide range of gadgets and accessories. Whether you're looking for cutting-edge technology, premium audio gear, or must-have mobile devices, we’ve got you covered. With top brands, affordable prices, exclusive deals, and fast, secure shipping, we ensure you get the best value for your money. Shop with confidence and upgrade your tech experience today. Explore our collection and find the perfect device that fits your lifestyle. Visit WebStore now – where innovation meets convenience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
