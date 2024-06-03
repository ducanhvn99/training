import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Listing } from './schema/listing.schema';
import { CreateListingDto } from './dto/create-listing.dto';

@Injectable()
export class ListingService {
  constructor(@InjectModel(Listing.name) private listingModel: Model<Listing>) {}

  async create(createListingDto: CreateListingDto): Promise<Listing> {
    const createdListing = new this.listingModel(createListingDto);
    return createdListing.save();
  }

  async findAll(): Promise<Listing[]> {
    return this.listingModel.find().exec();
  }

  async findOne(id: string): Promise<Listing> {
    return this.listingModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedListing = await this.listingModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedListing;
  }
}
