import express from "express";
import config from "./config";
import cors from "cors";
import mongoose from "mongoose";
import next from "next";
import DonationController from "./Donation/Donation.controller";

// const express = require("express");
// const config = require("./config/index.ts").default;
// const DonationController = require("./Donation/Donation.controller.ts").default;
// const cors = require("cors");
// const mongoose = require("mongoose");
// const next = require("next");

// const app = new App([new DonationController()], config.PORT);
// const app = express();
const port = config.PORT;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    const server = express();
    mongoose
      .connect(
        `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.w471pdz.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("logged in to mongo");
      })
      .catch((err) => {
        console.log("🚀 ~ file: index.ts:33 ~ .then ~ err:", err)
        // console.log(err.message);
      });
    server.use(cors({ origin: "*" }));
    server.use(express.json());
    server.use("/api/", new DonationController().router);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${port}`);
    });

    // console.log(app);
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
