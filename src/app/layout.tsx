import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TradingViewWidget from "./components/chart";
import OrderBook from "./components/OrderBook";
import SignUp from "./components/PlaceOrder";
import CommentCard from "./components/CommentCard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trireme",
  description: "",
};

export default function RootLayout({}) {
  return (
    <html className="overflow-scroll">
      <body className="overflow-scroll bg-gray-700">
        <header className="bg-gray-900">
          <Header />
        </header>
        <main>
          <div className="m-2">
            <div className="flex flex-row space-x-1 ">
              <div className="flex-1">
                <TradingViewWidget />
              </div>
              <div className="flex-1">
                <OrderBook />
              </div>
              <div className="flex-1">
                <SignUp />
              </div>
            </div>
            <div>
              <CommentCard />
            </div>
          </div>
        </main>
        <footer className="bg-gray-900 border-t border-gray-700">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

//<div class="flex flex-row space-x-1" style=" width: 100%; max-width: 100%, overflow: scroll;">"
