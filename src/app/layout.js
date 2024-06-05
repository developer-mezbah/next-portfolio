export const maxDuration = 300;
import BgSnow from "@/components/Others/BgSnow";
import TransitionProvider from "@/components/Others/TransitionProvider";
import "@/utils/css/Animation.css";
import "@/utils/css/Custom.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mezbah Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* + " dark-theme" */}

        <TransitionProvider>{children}
        </TransitionProvider>
        <BgSnow />
        <Toaster />
      </body>
    </html>
  );
}
