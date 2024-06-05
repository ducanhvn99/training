// import { Model } from 'mongoose';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Account } from './models';
// import { IAccount } from './interfaces';
// import { CreateAccountDto } from './account/dto/create-account.dto';

// @Injectable()
// export class AccountService {
//   constructor(@InjectModel(Account.name) private accountModel: Model<IAccount>) {}

//   async create(createAccountDto: CreateAccountDto): Promise<IAccount> {
//     const createdAccount = new this.accountModel(createAccountDto);
//     return createdAccount.save();
//   }

//   async findAll(): Promise<IAccount[]> {
//     return this.accountModel.find().exec();
//   }

//   async findOne(id: string): Promise<IAccount> {
//     return this.accountModel.findOne({ _id: id }).exec();
//   }

//   async delete(id: string) {
//     const deletedAccount = await this.accountModel
//       .findByIdAndDelete({ _id: id })
//       .exec();
//     return deletedAccount;
//   }
// }
