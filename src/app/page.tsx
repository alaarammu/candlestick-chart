   /*import React from "react";
  import TradingViewWidget from "./components/chart";
  import Header from "./components/header";
  import OrderBook from "./components/OrderBook";
  import SignUp from "./components/sign-up";
  import CommentCard from "./components/CommentCard";
  import Footer from "./components/footer";

  const Home: React.FC = () => {
    return (
      <div className="bg-[rgb(53,57,64)] overflow-auto">
        <div className="bg-[rgb(53,57,64)] flex flex-col h-screen overflow-hidden flex-grow z-0">
          <Header />

          <div className="flex flex-col flex-grow m-2 overflow-x-auto">
            <CommentCard />
            <div className="flex-grow flex ">
              <div className="relative flex-grow min-w-[800px] min-h-[580px] max-h-[580px] z-10">
                <TradingViewWidget />
              </div>
              <div className="flex-shrink-0 z-10">
                <OrderBook />
              </div>
              <SignUp />
            </div>
            <div className="z-10">
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Home; 
  */


  import Footer from "./components/footer";
  import TradingViewWidget from "./components/chart";
  import OrderBook from "./components/OrderBook";
  import SignUp from "./components/PlaceOrder";
  import CommentCard from "./components/CommentCard";
  import XPosts from "./components/x-posts";
  import SignUpCard from "./components/SignUp";
  import Header from "./components/header";
  
  export default function Home() {
    return (
      <div className="bg-gray-700 ">
          <Header />
          <div className="flex space-x-1 m-2 ">
            <div className="flex-1 flex-row">
              <TradingViewWidget />
            </div>
              <OrderBook />
              <SignUp />
          </div>
  
          <div className="flex space-x-1 m-2">
              <CommentCard />
              <XPosts />
              <SignUpCard />
          </div>

        <div className="bg-gray-900 border-t border-gray-700">
          <Footer />
        </div>
      </div>
    );
  }
  