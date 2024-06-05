import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://training_user:NDAvietnam*99@training.9kf6sqw.mongodb.net/?retryWrites=true&w=majority&appName=training'),
  },
];