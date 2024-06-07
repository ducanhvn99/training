import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { ListingModule } from './listing/listing.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AccountModule, ListingModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}