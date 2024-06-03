import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop()
  username: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  age: number;

  @Prop()
  location: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);