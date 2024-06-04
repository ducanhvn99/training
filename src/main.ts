import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { run } from './connection';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

console.log(mongoose.connection.readyState);
//var run = require("./connection").run;
run().catch(err => console.log(err));
console.log(mongoose.connection.readyState);
