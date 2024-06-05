import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";
import { accountProvider } from "./account.provider";

@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [AccountService, ...accountProvider],
})
export class AccountModule {}