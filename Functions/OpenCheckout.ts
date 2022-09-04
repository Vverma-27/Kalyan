import React from "react";
import route from "../Api";

const OpenCheckout = async (
  // id: string,
  name: string,
  email: string,
  argAmount: number,
  frequency: string
) => {
  const donationRoute = route("/api/donations");
  let id;
  const res = await donationRoute.post<
    any,
    {
      data: {
        order_id?: string;
        subscription_id?: string;
        amount: number;
        currency: string;
        id: string;
      };
    }
  >("/", { amount: argAmount, frequency });
  console.log(res);
  id = res.data.id;
  const {
    order_id,
    amount,
    currency,
    subscription_id,
  }: {
    order_id?: string;
    amount: number;
    currency: string;
    subscription_id?: string;
  } = res.data;
  const options: any = {
    key: process.env.NEXT_PUBLIC_REACT_APP_RAZORPAY_PUBLIC_KEY, // Enter the Key ID generated from the Dashboard
    amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency,
    name: "Kalyan Trust",
    description: "Test Transaction",
    handler: (response) => {
      window.location.href = `${window.location.origin}/success`;
    },
    // handler: async (response) => {
    //   console.log("response ", response);
    //   const values = {
    //     ...response,
    //     id,
    //   };
    //   const res = await donationRoute.post<
    //     any,
    //     {
    //       data: {
    //         success: boolean;
    //       };
    //     }
    //   >("/verification", values);
    //   if (!res.data.success) {
    //     alert("Payment Failed");
    //     // window.location.href = process.env.NEXT_PUBLIC_REACT_APP_URL;
    //   } else {
    //     window.location.href = `${process.env.NEXT_PUBLIC_REACT_APP_URL}/success`;
    //   }
    // },
    image: "/logo-raz.jpg", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    // callback_url: `${process.env.NEXT_PUBLIC_REACT_APP_URL}/success`,
    prefill: {
      name,
      email,
    },
  };
  if (order_id) options.order_id = order_id;
  else options.subscription_id = subscription_id;
  console.log(options);
  //@ts-ignore
  var rzp1 = window.Razorpay(options);
  rzp1.open();
};

export default OpenCheckout;
