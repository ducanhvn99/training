import { Mongoose } from 'mongoose';
import { accountSchema } from './schema/account.schema';

export const accountProvider = [
  {
    provide: 'ACCOUNT_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Account', accountSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];