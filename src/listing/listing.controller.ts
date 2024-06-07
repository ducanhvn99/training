import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ListingService } from "./listing.service";
import { CreateListingDto } from "./dto/create-listing.dto";
import { IListing } from "./interface/listing.interface";
import { Public } from "src/decorators/pulic.decorator";

@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post()
  async create(@Body() createListingDto: CreateListingDto) {
    await this.listingService.create(createListingDto);
  }

  @Public()
  @Get()
  async findAll(): Promise<IListing[]> {
    return this.listingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IListing> {
    return this.listingService.findOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() CreateListingDto: CreateListingDto)
  {
    return this.listingService.updateOne(id, CreateListingDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.listingService.delete(id);
  }
}
