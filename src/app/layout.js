import RockiesNavbar from "./components/rockies-navbar";
import UiProvider from "./components/ui-provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App de los Rockies",
  description: 'La App oficial de los Rocosos de Valencia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          <RockiesNavbar />
          {children}
        </UiProvider>
      </body>
    </html>
  );
}
