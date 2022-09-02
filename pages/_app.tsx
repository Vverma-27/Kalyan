import React, { useEffect } from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import LoadRazorpay from "../Functions/LoadRazorpay";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await LoadRazorpay();
      if (!res) alert("Error loading Razorpay SDK! Kindly Reload The Page");
    };
    asyncFunc();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
