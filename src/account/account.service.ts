import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './schema/account.schema';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async findOne(id: string): Promise<Account> {
    return this.accountModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedAccount = await this.accountModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedAccount;
  }
}
