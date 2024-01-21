import { Inter } from "next/font/google";
import StoreProvider from "../store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Shop App",
  description: "Generated by create shop app"
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
