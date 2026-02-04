import "./globals.css";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
import TopOffers from "@/components/web/TopOffers";
import Providers from "./providers";
import type { ReactNode } from "react";

export const metadata = {
  title: "Puttaparthi Farms",
  description: "Organic products",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <TopOffers />
          <Navbar />
          {children}
          <Footer />
        </Providers>

        {/* ✅ Razorpay script — STEP 3 */}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </body>
    </html>
  );
}





