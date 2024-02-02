// track.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Track extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  artistId: string;

  @Prop()
  albumId: string;

  @Prop({ required: true })
  duration: number;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
