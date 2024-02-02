// favorites.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { Favorites, FavoritesSchema } from './favorites.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Favorites.name, schema: FavoritesSchema },
    ]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
