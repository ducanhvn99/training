import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [AccountModule, ListingModule],
})
export class AppModule {}