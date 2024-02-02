// album.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Album extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  year: number;

  @Prop()
  artistId: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
