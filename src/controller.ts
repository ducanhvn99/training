// import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// import { AccountService } from './service';
// import { IAccount } from './interfaces';
// import { CreateAccountDto } from './account/dto/create-account.dto';

// @Controller('account')
// export class AccountController {
//   constructor(private readonly accountService: AccountService) {}

//   @Post()
//   async create(@Body() createAccountDto: CreateAccountDto) {
//     await this.accountService.create(createAccountDto);
//   }

//   @Get()
//   async findAll(): Promise<IAccount[]> {
//     return this.accountService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<IAccount> {
//     return this.accountService.findOne(id);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string) {
//     return this.accountService.delete(id);
//   }
// }
