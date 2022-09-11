import React, { useEffect } from "react";
import { injectStyle } from "react-toastify/dist/inject-style";

// CALL IT ONCE IN YOUR APP
import { ToastContainer } from "react-toastify";
import "../styles/index.css";
import LoadRazorpay from "../Functions/LoadRazorpay";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await LoadRazorpay();
      if (!res) alert("Error loading Razorpay SDK! Kindly Reload The Page");
    };
    asyncFunc();
    injectStyle();
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
