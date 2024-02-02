// user.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  login: string;

  @Prop({ required: true, select: false }) // Exclude password from queries
  password: string;

  @Prop({ default: 0 })
  version: number;

  @Prop({ default: Date.now })
  createdAt: number;

  @Prop({ default: Date.now })
  updatedAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
