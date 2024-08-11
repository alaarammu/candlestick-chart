import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// This is a simple pop-up component which appears when buttons only available to users are clicked.

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
        >
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
