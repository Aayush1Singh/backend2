import mongoose from "mongoose";
import "dotenv/config";
import { DB_NAME } from "../constants.js";
import express from "express";
import { app } from "../db/app.js";

const connectDB = async () => {
  try {
    const connectI = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
  } catch (err) {
    throw new Error("error in db index.js");
  }
};
export default connectDB;
