"use client";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Modal from "./pop-up";

const socket = io("http://localhost:3001"); 


//This component features mock order-placement access. I have connected the top input box to the backend via websocket, it displays on rotation the top ask price.

const SignUp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topAskPrice, setTopAskPrice] = useState<number | null>(null);

  useEffect(() => {
    // Handle incoming order book updates
    socket.on('orderBookUpdate', (data: { asks: [string, string][] }) => {
      console.log('Order Book Update Received:', data);
      if (data.asks.length > 0) {
        const topAsk = data.asks[0][0]; 
        const parsedPrice = parseFloat(topAsk);
        console.log('Parsed Top Ask Price:', parsedPrice);
        setTopAskPrice(parsedPrice);
      }
    });

    socket.emit('subscribeOrderBook');
    console.log('Subscribed to Order Book Updates');


    return () => {
      socket.off("orderBookUpdate");
      socket.disconnect();
      console.log("WebSocket connection closed");
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-900 pl-3 pr-3 pt-3 pb-3 w-[325px] h-[550px]">
    <div className="flex justify-center mt-3 text-sm">
      <button
        onClick={openModal}
        className="text-white pt-2 pb-2 bg-green-400 rounded-md font-bold w-[200px]"
      >
        Buy
      </button>
      <button
        onClick={openModal}
        className="text-gray-400 bg-gray-700 font-bold pt-2 pb-2 rounded-md w-[200px]"
      >
        Sell
      </button>
    </div>

    <div className="flex justify-between text-xs border-t border-b border-gray-600 mt-3">
      <p className="mb-3 mt-3 text-gray-400">Available Balance</p>
      <p className="mb-3 mt-3 text-white font-bold">--USDT</p>
    </div>

    <div className="flex items-center my-4">
      <div className="flex-grow">
        <label htmlFor="orderPrice" className="text-white mb-2 block text-sm">
          Order Price
        </label>
        <div className="relative">
          <input
            type="text"
            id="orderPrice"
            name="orderPrice"
            placeholder={topAskPrice !== null ? `Top Ask: ${topAskPrice.toFixed(2)} USDT` : "..."}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 pr-16 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            USDT
          </span>
        </div>
      </div>
    </div>


    <div className="flex items-center my-4">
      <div className="flex-grow">
        <label htmlFor="quantity" className="text-white mb-2 block text-sm">
          Quantity
        </label>
        <div className="relative">
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 pr-16 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            style={{
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
              appearance: 'none'
            } as React.CSSProperties}
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            SOL
          </span>
        </div>
      </div>
    </div>


    <div className="flex items-center my-4">
      <div className="flex-grow">
        <label htmlFor="orderValue" className="text-white mb-2 block text-sm">
          Order Value
        </label>
        <div className="relative">
          <input
            type="text"
            id="orderValue"
            name="orderValue"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-2 pr-16 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            USDT
          </span>
        </div>
      </div>
    </div>


      <div className="flex justify-center mt-12 text-sm" >
        <button
          onClick={openModal}
          className="text-gray-900 p-3 bg-yellow-400 rounded-md font-bold w-[200px]"
        >
          Trade
        </button>
        <button
          onClick={openModal}
          className="text-gray-300 bg-gray-600 font-bold p-3 rounded-md w-[200px]"
        >
          Tools
        </button>
      </div>


      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SignUp;
