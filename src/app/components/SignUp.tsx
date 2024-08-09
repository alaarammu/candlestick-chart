"use client";
import React from "react";

const SignUpCard: React.FC = () => {
  return (
    <div className="p-4 w-80 bg-gray-900 shadow-md h-[300px] flex flex-col items-center">
      <h3 className="text-lg font-semibold text-gray-300 mb-2">
        Start Trading Today!
      </h3>
      <p className="text-sm text-gray-400 mb-4 text-center">
        Join us and take your trading to the next level. Sign up now to get access to real-time updates and exclusive trading insights.
      </p>
      <div className="flex flex-col items-center w-full text-sm text-white p-2">
        <button
          className="bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition-colors w-full"
        >
          Sign Up
        </button>
        <p className="text-yellow-400 font-xs p-2">
          Already have an account? Sign in!
        </p>
        <button
          className="bg-green-400 text-white font-bold py-2 px-4 rounded-md hover:bg-green-300 transition-colors w-full"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUpCard;
