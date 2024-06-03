import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://training_user:NDAvietnam*99@training.9kf6sqw.mongodb.net/?retryWrites=true&w=majority&appName=training')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}