import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Model } from "mongoose";
import IListing from "./interface/listing.interface";
import CreateListingDto from "./dto/create-listing.dto";
import { currentAccount } from "src/auth/local.strategy";
import { APIFeatures } from "src/utils/apiFeatures";

@Injectable()
export default class ListingService {
  constructor(@Inject('LISTING_MODEL') private listingModel: Model<IListing>) {}

  async create(createListingDto: CreateListingDto): Promise<IListing> {
    const createdListing = new this.listingModel(createListingDto);
    return createdListing.save();
  }

  async findAll(): Promise<IListing[]> {
    return this.listingModel.find().exec();
  }

  async find(query?: any)
  {
    const features = new APIFeatures(this.listingModel.find(), query)
      .filter()
      .sort()
      .limit()
      .pagination()
    //Execute the query
    const listings = await features.mongooseQuery;

    return listings;
  }

  async findOne(id: string): Promise<IListing> {
    return this.listingModel.findOne({ _id: id }).exec();
  }

  async updateOne(id: string, createListingDto: CreateListingDto)
  {
    const itemForUpdate = this.listingModel.findOne({_id: id});
    if((await itemForUpdate).username != currentAccount)
      {
        throw new UnauthorizedException();
      }
    return this.listingModel.updateOne({_id: id}, createListingDto).exec();
  }

  async delete(id: string) {
    const itemForDelete = this.listingModel.findOne({_id: id});
    if((await itemForDelete).username != currentAccount)
      {
        throw new UnauthorizedException();
      }
    const deletedListing = await this.listingModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedListing;
  }
}