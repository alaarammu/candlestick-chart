"use client";
import React from "react";

// This is a sign-up/sign-in component fitted to fill add a marketing ploy of bringing in potential users.

const SignUpCard: React.FC = () => {
  return (
    <div className="p-3 h-[300px] bg-gray-900 shadow-md flex flex-col justify-between items-center w-full max-w-[325px] overflow-auto">
      <h3 className="text-base font-semibold text-gray-300 mb-1 text-center">
        Start Trading Today!
      </h3>
      <p className="text-sm text-gray-400 mb-2 text-center">
        Join us and take your trading to the next level. Sign up now to get
        access to real-time updates and exclusive trading insights.
      </p>

      <div className="flex flex-col items-center w-full text-sm text-white space-y-4 mb-2 flex-shrink">
        <button className="bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition-colors w-full">
          Sign Up
        </button>
        <p className="text-yellow-400 text-xs text-center">
          Already have an account? Sign in!
        </p>
        <button className="bg-green-400 text-white font-bold py-2 px-4 rounded-md hover:bg-green-500 transition-colors w-full">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUpCard;
