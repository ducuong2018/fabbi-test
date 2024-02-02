// track.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Track } from './track.entity';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private readonly trackModel: Model<Track>,
  ) {}

  async findAll(): Promise<Track[]> {
    return this.trackModel.find().exec();
  }

  async findById(id: string): Promise<Track | null> {
    return this.trackModel.findById(id).exec();
  }

  async create(track: Track): Promise<Track> {
    const createdTrack = new this.trackModel(track);
    return createdTrack.save();
  }

  async update(id: string, updates: Partial<Track>): Promise<Track | null> {
    return this.trackModel.findByIdAndUpdate(id, updates, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.trackModel.findByIdAndDelete(id).exec();
  }
}
