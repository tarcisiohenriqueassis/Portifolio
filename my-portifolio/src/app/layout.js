import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portifolio Tarcisio H",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
