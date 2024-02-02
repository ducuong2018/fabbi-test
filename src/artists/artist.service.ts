// artist.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './artist.entity';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist.name) private readonly artistModel: Model<Artist>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }

  async findById(id: string): Promise<Artist | null> {
    return this.artistModel.findById(id).exec();
  }

  async create(artist: Artist): Promise<Artist> {
    const createdArtist = new this.artistModel(artist);
    return createdArtist.save();
  }

  async update(id: string, updates: Partial<Artist>): Promise<Artist | null> {
    return this.artistModel
      .findByIdAndUpdate(id, updates, { new: true })
      .exec();
  }

  async delete(id: string): Promise<void> {
    await this.artistModel.findByIdAndDelete(id).exec();
  }
}
