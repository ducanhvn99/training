import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { IListing } from "./interface/listing.interface";
import { CreateListingDto } from "./dto/create-listing.dto";

@Injectable()
export class ListingService {
  constructor(@Inject('LISTING_MODEL') private listingModel: Model<IListing>) {}

  async create(createListingDto: CreateListingDto): Promise<IListing> {
    const createdListing = new this.listingModel(createListingDto);
    return createdListing.save();
  }

  async findAll(): Promise<IListing[]> {
    return this.listingModel.find().exec();
  }

  async findOne(id: string): Promise<IListing> {
    return this.listingModel.findOne({ _id: id }).exec();
  }

  async updateOne(id: string, createListingDto: CreateListingDto)
  {
    return this.listingModel.updateOne({_id: id}, createListingDto).exec();
  }

  async delete(id: string) {
    const deletedListing = await this.listingModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedListing;
  }
}