import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center w-full">
      <div className="px-4">
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              About Us
            </h2>
            <p className="text-sm">
              Trireme Trading stands at the forefront of the industry, excelling
              in cryptocurrency trading and market making with unrivaled
              expertise and leadership.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Ftriremetrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700 transition duration-300"
              >
                <FaXTwitter className="text-5xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/trireme-trading/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700 transition duration-300"
              >
                <FaLinkedin className="text-5xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 text-sm text-center">
        <p>
          &copy; {new Date().getFullYear()} Trireme Trading. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
