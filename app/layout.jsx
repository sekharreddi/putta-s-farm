import "./globals.css";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
import TopOffers from "@/components/web/TopOffers";
import Providers from "./providers";

export const metadata = {
  title: "Puttaparthi Farms",
  description: "Organic products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <TopOffers />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}




