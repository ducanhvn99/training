import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AccountService } from "./account.service";
import { CreateAccountDto } from "./dto/create-account.dto";
import { IAccount } from "./interface/account.interface";

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    await this.accountService.create(createAccountDto);
  }

  @Get()
  async findAll(): Promise<IAccount[]> {
    return this.accountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IAccount> {
    return this.accountService.findOne(id);
  }

  @Get('username/:username')
  async findOneByUsername(@Param('username') username: string): Promise<IAccount> {
    return this.accountService.findOneByUsername(username);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() CreateAccountDto: CreateAccountDto)
  {
    return this.accountService.updateOne(id, CreateAccountDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.accountService.delete(id);
  }
}
