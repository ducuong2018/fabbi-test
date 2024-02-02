// album.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './album.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Album')
@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async findAll(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Album | null> {
    return this.albumService.findById(id);
  }

  @Post()
  async create(
    @Body() createAlbumDto: { name: string; year: number; artistId: string },
  ): Promise<Album> {
    const album: Partial<Album> = {
      name: createAlbumDto.name,
      year: createAlbumDto.year,
      artistId: createAlbumDto.artistId,
    };
    return this.albumService.create(album as Album);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlbumDto: { name?: string; year?: number; artistId?: string },
  ): Promise<Album | null> {
    const updates: Partial<Album> = updateAlbumDto;
    return this.albumService.update(id, updates);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.albumService.delete(id);
  }
}
