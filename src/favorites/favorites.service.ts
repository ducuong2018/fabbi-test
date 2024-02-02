// favorites.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorites } from './favorites.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorites.name)
    private readonly favoritesModel: Model<Favorites>,
  ) {}

  async findAll(): Promise<Favorites[]> {
    return this.favoritesModel.find().exec();
  }

  async create(favorites: Favorites): Promise<Favorites> {
    const createdFavorites = new this.favoritesModel(favorites);
    return createdFavorites.save();
  }

  async addTrackToFavorites(
    favoritesId: string,
    trackId: string,
  ): Promise<Favorites | null> {
    return this.favoritesModel
      .findByIdAndUpdate(
        favoritesId,
        { $addToSet: { tracks: trackId } },
        { new: true },
      )
      .exec();
  }

  async removeTrackFromFavorites(
    favoritesId: string,
    trackId: string,
  ): Promise<Favorites | null> {
    return this.favoritesModel
      .findByIdAndUpdate(
        favoritesId,
        { $pull: { tracks: trackId } },
        { new: true },
      )
      .exec();
  }

  async addAlbumToFavorites(
    favoritesId: string,
    albumId: string,
  ): Promise<Favorites | null> {
    return this.favoritesModel
      .findByIdAndUpdate(
        favoritesId,
        { $addToSet: { albums: albumId } },
        { new: true },
      )
      .exec();
  }

  async removeAlbumFromFavorites(
    favoritesId: string,
    albumId: string,
  ): Promise<Favorites | null> {
    return this.favoritesModel
      .findByIdAndUpdate(
        favoritesId,
        { $pull: { albums: albumId } },
        { new: true },
      )
      .exec();
  }

  async addArtistToFavorites(
    favoritesId: string,
    artistId: string,
  ): Promise<Favorites | null> {
    return this.favoritesModel
      .findByIdAndUpdate(
        favoritesId,
        { $addToSet: { artists: artistId } },
        { new: true },
      )
      .exec();
  }

  async removeArtistFromFavorites(
    favoritesId: string,
    artistId: string,
  ): Promise<Favorites | null> {
    return this.favoritesModel
      .findByIdAndUpdate(
        favoritesId,
        { $pull: { artists: artistId } },
        { new: true },
      )
      .exec();
  }
}
