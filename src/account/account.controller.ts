import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './schema/account.schema';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    await this.accountService.create(createAccountDto);
  }

  @Get()
  async findAll(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Account> {
    return this.accountService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.accountService.delete(id);
  }
}
