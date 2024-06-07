import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { ListingModule } from './listing/listing.module';
// import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
// import { AppController } from './app.controller';

@Module({
  imports: [AccountModule, ListingModule, AuthModule],
  // controllers: [AuthController],
})
export class AppModule {}