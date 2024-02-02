// album.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album } from './album.entity';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private readonly albumModel: Model<Album>,
  ) {}

  async findAll(): Promise<Album[]> {
    return this.albumModel.find().exec();
  }

  async findById(id: string): Promise<Album | null> {
    return this.albumModel.findById(id).exec();
  }

  async create(album: Album): Promise<Album> {
    const createdAlbum = new this.albumModel(album);
    return createdAlbum.save();
  }

  async update(id: string, updates: Partial<Album>): Promise<Album | null> {
    return this.albumModel.findByIdAndUpdate(id, updates, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.albumModel.findByIdAndDelete(id).exec();
  }
}
