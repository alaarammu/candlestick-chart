"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


// A standard header component which includes several ddrop-down buttons leading to various informative ByBit pages relating to the title presented.


const navigateTo = (url: string) => {
  window.open(url, "_blank");
};

const handleMarketsClick = () =>
  navigateTo("https://www.bybit.com/en/markets/overview");
const handleCardClick = () =>
  navigateTo("https://www.bybit.com/fiat/cards?source=HomeNgBar");
const handleOneClickClick = () =>
  navigateTo("https://www.bybit.com/fiat/trade/express/home");
const handleP2pClick = () =>
  navigateTo(
    "https://www.bybit.com/fiat/trade/otc?actionType=1&token=USDT&fiat=GBP&paymentMethod="
  );
const handleFiatDepositClick = () =>
  navigateTo("https://www.bybit.com/fiat/trade/deposit/home");
const handleCryptoDepositClick = () =>
  navigateTo("https://www.bybit.com/user/assets/deposit");
const handleEarnClick = () => navigateTo("https://www.bybit.com/en/earn/home/");
const handleBybitStructuredProducts = () =>
  navigateTo("https://www.bybit.com/en/earn/structured-product-intro");
const handleCryptoLoansClick = () =>
  navigateTo("https://www.bybit.com/en/trade/spot/loan");
const handleCopyTradingClick = () =>
  navigateTo("https://www.bybit.com/en/copy-trading");
const handleTradeGPTClick = () =>
  navigateTo("https://www.bybit.com/en/tradegpt");
const handleTradingBotClick = () =>
  navigateTo("https://www.bybit.com/en/trading-bot");
const handleLeaderboardClick = () =>
  navigateTo("https://www.bybit.com/en/leaderboard");
const handlePositionBuilderClick = () =>
  navigateTo("https://www.bybit.com/en/position-builder");
const handleDerivativesPortalClick = () =>
  window.open("https://www.bybit.com/en/derivatives-portal");
const handleUSDTPerpetualsClick = () =>
  window.open("https://www.bybit.com/en/usdt-perpetuals");
const handlePreMarketPerpetualsClick = () =>
  window.open("https://www.bybit.com/en/pre-market-perpetuals");
const handleUSDCPerpetualsClick = () =>
  window.open("https://www.bybit.com/en/usdc-perpetuals");
const handleInversePerpetualsClick = () =>
  window.open("https://www.bybit.com/en/inverse-perpetuals");
const handleFuturesClick = () =>
  window.open("https://www.bybit.com/en/futures", "_blank");
const handleUSDCOptionsClick = () =>
  window.open("https://www.bybit.com/en/usdc-options");
const handleCopyTrading = () =>
  window.open("https://www.bybit.com/en/copy-trading");

const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  console.log("Search done");
};

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 py-4 px-5 flex flex-wrap items-center">


      <nav className="flex flex-wrap gap-2 lg:gap-4 flex-grow">

      <h1 className="font-semibold text-white text-2xl lg:text-4xl flex-shrink-0 mb-4 lg:mb-0">
        Trireme Trading
      </h1>

        <div className="relative group flex-shrink-0">
          <button className="text-gray-400 px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none flex items-center text-sm hover:text-yellow-400">
            Buy Crypto
            <IoIosArrowDown className="ml-2" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400">
            <div className="p-4">
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleOneClickClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  One-Click Buy
                  <p className="mt-2 text-white">Buy Crypto Within Seconds</p>
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleP2pClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  P2P Trading (0 Fees)
                  <p className="mt-2 text-white">
                    60+ Fiat Currencies and Various popular local payment
                    methods with Best Prices
                  </p>
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleFiatDepositClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Fiat Deposit
                  <p className="mt-2 text-white">
                    Top up Balance via Bank Transfer or Bank Card
                  </p>
                </button>
              </div>
              <div>
                <button
                  onClick={handleCryptoDepositClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Crypto Deposit
                  <p className="mt-2 text-white">
                    Instant Crypto Deposits to Your Account
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group flex-shrink-0">
          <button className="text-gray-400 px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none flex items-center text-sm hover:text-yellow-400">
            Markets
            <IoIosArrowDown className="ml-2" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400">
            <div className="p-4">
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleMarketsClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-yellow-400"
                >
                  Market Overview
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group flex-shrink-0">
          <button
            onClick={handleCardClick}
            className="text-gray-400 px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none flex items-center text-sm hover:text-yellow-400"
          >
            Card
          </button>
        </div>

        <div className="relative group flex-shrink-0">
          <button className="text-gray-400 px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none flex items-center text-sm hover:text-yellow-400">
            Finance
            <IoIosArrowDown className="ml-2" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400">
            <div className="p-4">
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleEarnClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Earn
                  <p className="mt-2 text-white">
                    Easy access to grow your crypto
                  </p>
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleBybitStructuredProducts}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Bybit Structured Products
                  <p className="mt-2 text-white">
                    Get high yield despite price volatility
                  </p>
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleCryptoLoansClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Crypto Loans
                  <p className="mt-2 text-white">Borrow & Lend Crypto Easily</p>
                </button>
              </div>
              <div>
                <button
                  onClick={handleTradeGPTClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Trade GPT
                  <p className="mt-2 text-white">
                    AI-powered trading assistant
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group flex-shrink-0">
          <button className="text-gray-400 px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none flex items-center text-sm hover:text-yellow-400">
            Tools
            <IoIosArrowDown className="ml-2" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400">
            <div className="p-4">
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleLeaderboardClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Leaderboard
                  <p className="mt-2 text-white">
                    View Top Traders and Their Performance
                  </p>
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handlePositionBuilderClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Position Builder
                  <p className="mt-2 text-white">
                    Create & Customize Trading Positions
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group flex-shrink-0">
          <button className="text-gray-400 px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none flex items-center text-sm hover:text-yellow-400">
            Derivatives
            <IoIosArrowDown className="ml-2" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400">
            <div className="p-4">
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleUSDTPerpetualsClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  USDT Perpetuals
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handlePreMarketPerpetualsClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Pre-Market Perpetuals
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleUSDCPerpetualsClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  USDC Perpetuals
                </button>
              </div>
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleInversePerpetualsClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Inverse Perpetuals
                </button>
              </div>
              <div>
                <button
                  onClick={handleFuturesClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Futures
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group flex-shrink-0">
          <button className="text-gray-400 px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none flex items-center text-sm hover:text-yellow-400">
            More
            <IoIosArrowDown className="ml-2" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400">
            <div className="p-4">
              <div className="border-b border-gray-700 pb-2 mb-2">
                <button
                  onClick={handleUSDCOptionsClick}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  USDC Options
                </button>
              </div>
              <div>
                <button
                  onClick={handleCopyTrading}
                  className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  Copy Trading
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-shrink flex items-center  ">
        <input
          type="text"
          placeholder="Start Trading!"
          className="border border-gray-600 rounded-full py-2 px-4 outline-none bg-gray-800 text-white pr-10 pl-12 text-xs hover:border-yellow-500 w-full lg:w-auto"
          onKeyPress={handleKeyPress}
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
      </div>

      </nav>




    </header>
  );
};

export default Header;
