// track.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Track')
@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  async findAll(): Promise<Track[]> {
    return this.trackService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Track | null> {
    return this.trackService.findById(id);
  }

  @Post()
  async create(
    @Body()
    createTrackDto: {
      name: string;
      artistId: string;
      albumId: string;
      duration: number;
    },
  ): Promise<Track> {
    const track: Partial<Track> = {
      name: createTrackDto.name,
      artistId: createTrackDto.artistId,
      albumId: createTrackDto.albumId,
      duration: createTrackDto.duration,
    };
    return this.trackService.create(track as Track);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body()
    updateTrackDto: {
      name?: string;
      artistId?: string;
      albumId?: string;
      duration?: number;
    },
  ): Promise<Track | null> {
    const updates: Partial<Track> = updateTrackDto;
    return this.trackService.update(id, updates);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.trackService.delete(id);
  }
}
