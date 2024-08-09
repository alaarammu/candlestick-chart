import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg mx-4 relative">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Sign In Required</h2>
        <p className="mb-4 text-center">
          Please sign in to continue. If you don&apos;t have an account, please sign up.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="text-white pt-2 pb-2 bg-green-400 rounded-md font-bold w-[130px] hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign In
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 bg-gray-700 font-bold pt-2 pb-2 rounded-md w-[130px] hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
