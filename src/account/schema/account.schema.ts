import mongoose, { Schema } from "mongoose";
// import { IAccount } from "../interface/account.interface";

export const accountSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
  location: String,
  phone: String,
  email: String
});