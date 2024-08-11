"use client";
import React, { useEffect, useState } from "react";

// This is a marketing component that displays a carousel of mock-tweets posted by trireme. I would've liked to use X for developers - but of course, i do not have access.

const XPosts: React.FC = () => {
  const [posts] = useState<string[]>([
    "Trireme Trading leverages high-frequency trading techniques to deliver unrivaled Market Making services. We partner with the most groundbreaking cryptocurrency projects worldwide, operating seamlessly across both on- and off-chain exchanges.",
    "We ensure a fluid and dynamic marketplace by providing continuous depth, liquidity, and spread to the order book, around the clock, seven days a week. Trireme Trading sets the standard for excellence and innovation in digital asset trading.",
    "Our proprietary algorithms ensure superior liquidation processes, consistently securing advantageous prices in anticipation of each token's future trajectory. This operation runs concurrently across all of our vetted exchanges."
  ]);
  
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [posts.length]);

  return (
    <div className="p-4 bg-gray-900 shadow-md h-[300px] flex flex-col justify-between w-full max-w-[325px]">
      <div className="flex space-x-2">
        <h3 className="text-lg font-semibold text-gray-300 mb-2">
          Follow us on X
        </h3>
        <a
          href="https://x.com/triremetrading"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 font-bold hover:underline mb-3 flex"
        >
          @TriremeTrading
        </a>
      </div>

      <div className="bg-gray-700 p-5 rounded-md h-[220px] text-sm text-white border border-yellow-400 font-sans text-center overflow-auto">
        {posts.length > 0 ? (
          <p className="animate-scroll">{posts[currentPostIndex]}</p>
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
};

export default XPosts;
