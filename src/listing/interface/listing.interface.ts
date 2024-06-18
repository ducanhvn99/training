import { Document } from "mongoose";

export default interface IListing extends Document{
    readonly username: string;
    readonly location: string;
    readonly phone: string;
    readonly email: string;
    readonly price: number;
    readonly VIN: string;
    readonly brand: string;
    readonly car_model: string;
    readonly title: string;
    readonly color: string;
    readonly year: number;
    readonly mileague: number;
}