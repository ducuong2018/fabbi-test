// artist.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from './artist.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Artist')
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  async findAll(): Promise<Artist[]> {
    return this.artistService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Artist | null> {
    return this.artistService.findById(id);
  }

  @Post()
  async create(
    @Body() createArtistDto: { name: string; grammy: boolean },
  ): Promise<Artist> {
    const artist: Partial<Artist> = {
      name: createArtistDto.name,
      grammy: createArtistDto.grammy,
    };
    return this.artistService.create(artist as Artist);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArtistDto: { grammy: boolean },
  ): Promise<Artist | null> {
    const updates: Partial<Artist> = {
      grammy: updateArtistDto.grammy,
    };
    return this.artistService.update(id, updates);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.artistService.delete(id);
  }
}
