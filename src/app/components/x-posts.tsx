"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// This is a marketing component which connected via websocket. It displays a carousel of mock-tweets posted by the tech body. While I would have liked to use X for developers, of course I do not have access to Trireme's accounts to make this possible.

const XPosts: React.FC = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit("subscribeXPosts");
    });

    socket.on("xPostUpdate", (data: string[]) => {
      setPosts(data);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    const intervalId = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      socket.disconnect();
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

      <div className="bg-gray-700 p-5 rounded-md h-[220px]  text-sm text-white border border-yellow-400 font-sans text-center overflow-auto">
        {posts.length > 0 ? (
          <p className="animate-scroll">{posts[currentPostIndex]}</p> // The posts themselves are available to view via the backend code, and connected to display them on the client-side.
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
};

export default XPosts;
