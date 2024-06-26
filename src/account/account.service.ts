import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import IAccount from "./interface/account.interface";
import CreateAccountDto from "./dto/create-account.dto";

@Injectable()
export default class AccountService {
  constructor(@Inject('ACCOUNT_MODEL') private accountModel: Model<IAccount>) {}

  async create(createAccountDto: CreateAccountDto): Promise<IAccount> {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }

  async findAll(): Promise<IAccount[]> {
    return this.accountModel.find().exec();
  }

  async findOne(id: string): Promise<IAccount> {
    return this.accountModel.findOne({ _id: id }).exec();
  }

  async findOneByUsername(username: string): Promise<IAccount | undefined> {
    return this.accountModel.findOne({ username: username }).exec();
  }

  async updateOne(id: string, createAccountDto: CreateAccountDto)
  {
    return this.accountModel.updateOne({_id: id}, createAccountDto).exec();
  }

  async delete(id: string) {
    const deletedAccount = await this.accountModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedAccount;
  }
}