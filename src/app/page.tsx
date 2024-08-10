
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
  