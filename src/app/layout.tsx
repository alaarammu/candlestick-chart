import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TradingViewWidget from "./components/chart";
import OrderBook from "./components/OrderBook";
import SignUp from "./components/PlaceOrder";
import CommentCard from "./components/CommentCard";
import XPosts from "./components/x-posts";
import SignUpCard from "./components/SignUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trireme",
  description: "",
};

export default function RootLayout({}) {
  return (
    <html>
      <body className=" bg-gray-700">
        <header className="bg-gray-900">
          <Header />
        </header>
        <main>
          <div className="m-2">
            <div className="flex ">
              <div className="flex-1">
                <TradingViewWidget />
              </div>
              <div className="ml-2">
                <OrderBook />
              </div>
              <div className="ml-2">
                <SignUp />
              </div>
            </div>

            <div className="flex ">
              <div className="">
                <CommentCard />  
              </div>
              <div className="ml-2">
              <XPosts />
              </div>
              <div className="ml-2">
                <SignUpCard />
              </div>
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
