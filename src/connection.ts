import { connect } from 'mongoose';
import { User } from './models';

export async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb+srv://training_user:NDAvietnam*99@training.9kf6sqw.mongodb.net/?retryWrites=true&w=majority&appName=training');

    const user = new User({
      name: 'Billy the KID',
      email: 'bill@initech.com',
      avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    await user.save();

    console.log(user.email); // 'bill@initech.com'
}