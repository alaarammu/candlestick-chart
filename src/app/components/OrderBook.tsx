"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// Define types
interface OrderBookUpdate {
  bids: [string, string][];
  asks: [string, string][];
}

const OrderBook: React.FC = () => {
  const [orderBook, setOrderBook] = useState<OrderBookUpdate>({
    bids: [],
    asks: [],
  });

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit("subscribeOrderBook");
    });

    socket.on("orderBookUpdate", (data: OrderBookUpdate) => {
      setOrderBook({
        bids: data.bids.slice(0, 11),
        asks: data.asks.slice(0, 11),
      });
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const calculateTotal = (
    data: [string, string][]
  ): { price: number; qty: number } => {
    return data.reduce(
      (acc, [price, qty]) => {
        acc.price += parseFloat(price) * parseFloat(qty);
        acc.qty += parseFloat(qty);
        return acc;
      },
      { price: 0, qty: 0 }
    );
  };

  return (
    <div className=" flex-shrink-0 w-[325px] h-[550px] bg-gray-900 p-2.5 text-xs  overflow-auto font-sans">
      <div className="flex justify-center">
        <h2 className="text-white mb-1 font-semibold border-b border-gray-700 pb-1">
          Order Book
        </h2>
      </div>
      <div className="bids">
        <h3 className="text-white mb-2 border-b border-gray-700 pb-1 text-center">
          Bids
        </h3>
        <div className="flex justify-between text-gray-400 border-b border-gray-700 mb-1">
          <span className="pb-1">Price (USDT)</span>
          <span className="pb-1">Qty (SOL)</span>
          <span className="pb-1">Total (USDT)</span>
        </div>

        {orderBook.bids.map((bid, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-red-600 px-2">{bid[0]}</span>
            <span className="text-gray-300 px-2">{bid[1]}</span>
            <span className="text-gray-300 px-2">
              {(parseFloat(bid[0]) * parseFloat(bid[1])).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="asks">
        <h3 className="text-white mb-1 border-b border-gray-700 pb-1 text-center">
          Asks
        </h3>
        <div className="flex justify-between text-gray-400 border-b border-gray-700 mb-1">
          <span className="pb-1">Price (USDT)</span>
          <span className="pb-1">Qty (SOL)</span>
          <span className="pb-1">Total (USDT)</span>
        </div>
        {orderBook.asks.map((ask, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-green-600 px-2">{ask[0]}</span>
            <span className="text-gray-300 px-2">{ask[1]}</span>
            <span className="text-gray-300 px-2">
              {(parseFloat(ask[0]) * parseFloat(ask[1])).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
