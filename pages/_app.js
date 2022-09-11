import React, { useEffect } from "react";
import "../styles/index.css";
import LoadRazorpay from "../Functions/LoadRazorpay";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await LoadRazorpay();
      if (!res) alert("Error loading Razorpay SDK! Kindly Reload The Page");
    };
    asyncFunc();
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
