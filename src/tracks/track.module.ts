// track.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { Track, TrackSchema } from './track.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
