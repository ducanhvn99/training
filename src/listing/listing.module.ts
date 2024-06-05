import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { ListingController } from "./listing.controller";
import { ListingService } from "./listing.service";
import { listingProvider } from "./listing.provider";

@Module({
  imports: [DatabaseModule],
  controllers: [ListingController],
  providers: [ListingService, ...listingProvider],
})
export class ListingModule {}