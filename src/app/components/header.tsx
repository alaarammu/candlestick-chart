"use client";

import React from "react";
import { PiTrademark } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const navigateTo = (url: string) => {
  window.open(url, "_blank");
};

// OnClick handlers using handleClick function to lead to each Bybit page
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
    <div className="flex items-center bg-gray-900 mb-2 ">
      <h1 className="font-semibold text-white text-4xl mt-5 ml-5 mb-5 shadow-xl flex justify-start flex-shrink-0">
        Trireme Trading
      </h1>
      <PiTrademark className="mt-5 ml-1 text-white mb-7 mr-11 flex-shrink-0" />

      <div className="relative group flex justify-start border-l-1  border-r-1 border-gray-500 flex-shrink-0">
        <button className=" text-gray-400 px-4 py-2 rounded-md mt-5  hover:bg-gray-800 focus:outline-none flex mb-3 text-sm hover:text-yellow-400 ">
          Buy Crypto
          <IoIosArrowDown className="mt-1 ml-2" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400 flex-shrink-0">
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
                  60+ Fiat Currencies and Various popular local payment methods
                  with Best Prices
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

      <div className="relative group flex justify-start border-l-1  border-r-1 border-gray-900">
        <button className=" text-gray-400 px-4 py-2 rounded-md mt-5  hover:bg-gray-800 focus:outline-none flex mb-3 text-sm hover:text-yellow-400">
          Markets
          <IoIosArrowDown className="mt-1 ml-2" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400 flex-shrink-0">
          <div className="p-4">
            <div className="border-b border-t border-gray-700 pb-2 mb- pt-2">
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

      <div className="relative group flex justify-start border-l-1  border-r-1 border-gray-500">
        <button
          onClick={handleCardClick}
          className=" text-gray-400 px-4 py-2 rounded-md mt-5  hover:bg-gray-800 focus:outline-none flex mb-3 text-sm hover:text-yellow-400"
        >
          Card
        </button>
      </div>

      <div className="relative group flex justify-start border-r-1 border-gray-500 ">
        <button className=" text-gray-400 px-4 py-2 rounded-md mt-5  hover:bg-gray-800 focus:outline-none flex mb-3 text-sm hover:text-yellow-400">
          Finance
          <IoIosArrowDown className="mt-1 ml-2" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400 flex-shrink-0">
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
                <p className="mt-2 text-white">
                  High LTV Crypto Loans. Repay Anytime.
                </p>
              </button>
            </div>
            <div>
              <button
                onClick={handleCryptoLoansClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Cardhot
                <p className="mt-2 text-white">
                  Spend Crypto Instantly & Globally
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group flex justify-start border-r-1 border-gray-500">
        <button className="text-gray-400 px-4 py-2 rounded-md mt-5 hover:bg-gray-800 focus:outline-none flex mb-3 text-sm hover:text-yellow-400">
          Tools
          <IoIosArrowDown className="mt-1 ml-2" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400 flex-shrink-0">
          <div className="p-4">
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleCopyTradingClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Copy Trading
                <p className="mt-2 text-white">Let top traders work for you</p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleTradeGPTClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                TradeGPT
                <p className="mt-2 text-white">
                  Leveraged on AI-powered trading
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleTradingBotClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Trading Bot
                <p className="mt-2 text-white">Smart Trades Made Easy</p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleLeaderboardClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Leaderboard
                <p className="mt-2 text-white">
                  Access a variety of trading tools to power up your trading
                  experience
                </p>
              </button>
            </div>
            <div>
              <button
                onClick={handlePositionBuilderClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Position Builder
                <p className="mt-2 text-white">
                  Simulate PnL for Perp/Futures/Options combos before placing
                  orders
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group flex justify-start border-r-1 border-gray-500 ">
        <button className="text-gray-400 px-4 py-2 rounded-md mt-5 hover:bg-gray-800 focus:outline-none flex mb-3 text-sm hover:text-yellow-400">
          Derivatives
          <IoIosArrowDown className="mt-1 ml-2" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg border border-gray-700 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-600 invisible group-hover:visible text-xs text-yellow-400 flex-shrink-0">
          <div className="p-4">
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleDerivativesPortalClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Derivatives Portal
                <p className="mt-2 text-white">
                  One-stop platform for all things Derivatives
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleUSDTPerpetualsClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                USDT Perpetuals
                <p className="mt-2 text-white">
                  Trade perpetual contracts, settled in USDT
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handlePreMarketPerpetualsClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Pre-Market Perpetuals
                <p className="mt-2 text-white">
                  Discover New Opportunities to Stay Ahead of the Game
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleUSDCPerpetualsClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                USDC Perpetuals
                <p className="mt-2 text-white">
                  Trade perpetual contracts, settled in USDC
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleInversePerpetualsClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Inverse Perpetuals
                <p className="mt-2 text-white">
                  Trade perpetual contracts, settled in coin
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleFuturesClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Futures
                <p className="mt-2 text-white">
                  Trade futures contracts, settled in USDC or coin
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleUSDCOptionsClick}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                USDC Options
                <p className="mt-2 text-white">
                  Trade options contracts, settled in USDC
                </p>
              </button>
            </div>
            <div className="border-b border-gray-700 pb-2 mb-2">
              <button
                onClick={handleCopyTrading}
                className="text-left w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                Copy Trading
                <p className="mt-2 text-white">Let top traders work for you</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-4 mr-4 relative">
        <input
          type="text"
          placeholder="Start Trading!"
          className="border border-gray-600 rounded-full py-2 px-4 outline-none bg-gray-800 text-white pr-13 pl-10 text-xs hover:border-yellow-500 left-1/3"
          onKeyPress={handleKeyPress}
        />
        <CiSearch className="absolute left-3 top-1/2  transform -translate-y-1/2 text-white text-2xl" />
      </div>
    </div>
  );
};

export default Header;
