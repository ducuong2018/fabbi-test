// artist.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { Artist, ArtistSchema } from './artist.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }]),
  ],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
