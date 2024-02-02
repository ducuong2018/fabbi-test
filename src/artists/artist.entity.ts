// artist.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Artist extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: false })
  grammy: boolean;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
