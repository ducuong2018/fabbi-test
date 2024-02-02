// favorites.controller.ts

import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { Favorites } from './favorites.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Favs')
@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async findAll(): Promise<Favorites[]> {
    return this.favoritesService.findAll();
  }

  @Post('track/:id')
  async addTrackToFavorites(
    @Param('id') favoritesId: string,
    @Param('id') trackId: string,
  ): Promise<Favorites | null> {
    return this.favoritesService.addTrackToFavorites(favoritesId, trackId);
  }

  @Delete('track/:id')
  async removeTrackFromFavorites(
    @Param('id') favoritesId: string,
    @Param('id') trackId: string,
  ): Promise<Favorites | null> {
    return this.favoritesService.removeTrackFromFavorites(favoritesId, trackId);
  }

  @Post('album/:id')
  async addAlbumToFavorites(
    @Param('id') favoritesId: string,
    @Param('id') albumId: string,
  ): Promise<Favorites | null> {
    return this.favoritesService.addAlbumToFavorites(favoritesId, albumId);
  }

  @Delete('album/:id')
  async removeAlbumFromFavorites(
    @Param('id') favoritesId: string,
    @Param('id') albumId: string,
  ): Promise<Favorites | null> {
    return this.favoritesService.removeAlbumFromFavorites(favoritesId, albumId);
  }

  @Post('artist/:id')
  addArtistToFavorites(
    @Param('id') favoritesId: string,
    @Param('id') artistId: string,
  ): Promise<Favorites | null> {
    return this.favoritesService.addArtistToFavorites(favoritesId, artistId);
  }
}
