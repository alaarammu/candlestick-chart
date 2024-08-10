"use client";
import React from "react";

const SignUpCard: React.FC = () => {
  return (
    <div className="p-3 h-[300px] bg-gray-900 shadow-md flex flex-col justify-between items-center w-full max-w-[325px] overflow-hidden">
      <h3 className="text-base font-semibold text-gray-300 mb-1 text-center">
        Start Trading Today!
      </h3>
      <p className="text-md text-gray-400 mb-2 text-center">
        Join us and take your trading to the next level. Sign up now to get
        access to real-time updates and exclusive trading insights.
      </p>

      <div className="flex flex-col items-center w-full text-sm text-white space-y-2 mb-2 flex-shrink">
        <button className="bg-gray-600 text-gray-300 font-bold py-1 px-4 rounded-md hover:bg-gray-500 transition-colors w-full">
          Sign Up
        </button>
        <p className="text-yellow-400 text-xs text-center">
          Already have an account? Sign in!
        </p>
        <button className="bg-green-400 text-white font-bold py-1 px-4 rounded-md hover:bg-green-300 transition-colors w-full">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUpCard;
