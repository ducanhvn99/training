import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose, { Schema, model, connect } from 'mongoose';
import { Account, AccountSchema } from './account/schema/account.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// Create a Model.
const Acc = model<Account>('Account', AccountSchema);

run().catch(err => console.log(err));

async function run() {
  // Connect to MongoDB
  await connect('mongodb+srv://training_user:NDAvietnam*99@training.9kf6sqw.mongodb.net/?retryWrites=true&w=majority&appName=training');

  console.log(mongoose.connection.readyState);

  const acc = new Account();
    acc.username = 'jdoe12345';
    acc.name = 'John Doe';
    acc.password = 'johndoepassword';
    acc.age = 20;
    acc.location = 'USA';
    await Acc.create(acc);

  console.log(acc.name);
}