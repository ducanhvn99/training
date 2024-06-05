import mongoose from "mongoose";

export const listingSchema = new mongoose.Schema({
    username: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    email: String,
    price: { type: Number, required: true },
    VIN: { type: String, required: true },
    brand: { type: String, required: true },
    car_model: String,
    title: { type: String, required: true },
    color: String,
    year: Number,
    mileague: { type: String, required: true },
})