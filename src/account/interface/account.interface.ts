import { Document } from "mongoose";

export default interface IAccount extends Document{
    readonly username: string;
    readonly name: string;
    readonly password: string;
    readonly age: number;
    readonly location: string;
    readonly phone: string;
    readonly email: string;
}