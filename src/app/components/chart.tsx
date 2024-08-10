"use client";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current && !container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "100%",
          "symbol": "BYBIT:SOLUSDT",
          "timezone": "Europe/London",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "range": "ALL",
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "compareSymbols": [
            {
              "symbol": "BINANCE:SOLUSD",
              "position": "SameScale"
            }
          ],
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container w-[1000px] h-[580px]"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
