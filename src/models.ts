import { model } from 'mongoose';
import { userSchema } from './schemas';

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);