import ThemeProvider from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import HomePageNav from "@/components/navigations/HomePageNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 relative ${inter.className}`}>
        <ThemeProvider>
          <HomePageNav />
          <div className="flex flex-row justify-between items-stretch gap-0">
            <div className="w-full min-h-screen bg-base-200">
              <div className="container mx-auto p-5">{children}</div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
