import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ListingService } from './listing.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { Listing } from './schema/listing.schema';

@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post()
  async create(@Body() createListingDto: CreateListingDto) {
    await this.listingService.create(createListingDto);
  }

  @Get()
  async findAll(): Promise<Listing[]> {
    return this.listingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Listing> {
    return this.listingService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.listingService.delete(id);
  }
}
