import { Schema } from 'mongoose';

// 2. Create a Schema corresponding to the document interface.
export const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
  });