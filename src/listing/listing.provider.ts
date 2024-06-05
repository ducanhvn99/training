import { Mongoose } from 'mongoose';
import { listingSchema } from './schema/listing.schema';

export const listingProvider = [
  {
    provide: 'LISTING_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Listing', listingSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];