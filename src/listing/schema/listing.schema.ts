import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ListingDocument = HydratedDocument<Listing>;

@Schema()
export class Listing {
    @Prop()
    username: string;

    @Prop()
    location: string;

    @Prop()
    price: number;

    @Prop()
    VIN: string;

    @Prop()
    brand: string;

    @Prop()
    model: string;

    @Prop()
    title: string;

    @Prop()
    color: string;

    @Prop()
    year: number;
    mileague: number;
}

export const ListingSchema = SchemaFactory.createForClass(Listing);