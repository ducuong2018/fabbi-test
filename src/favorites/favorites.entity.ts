// favorites.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Favorites as FavoritesInterface } from './favorites.interface';

@Schema()
export class Favorites extends Document implements FavoritesInterface {
  @Prop({ type: [String], default: [] })
  artists: string[];

  @Prop({ type: [String], default: [] })
  albums: string[];

  @Prop({ type: [String], default: [] })
  tracks: string[];
}

export const FavoritesSchema = SchemaFactory.createForClass(Favorites);
