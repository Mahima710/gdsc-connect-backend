import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Socials {
  @ApiProperty()
  facebook: string;

  @ApiProperty()
  instagram: string;

  @ApiProperty()
  linkedin: string;

  @ApiProperty()
  twitter: string;

  @ApiProperty()
  github: string;
}

@Schema()
export class User {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @Prop({
    enum: ['admin', 'member'],
    default: 'member',
    required: true,
  })
  @ApiProperty()
  role: string;

  @Prop({ required: true, unique: true })
  @ApiProperty()
  email: string;

  @Prop({ required: true })
  @ApiProperty()
  graduation_batch: number;

  @Prop({
    type: [
      {
        type: String,
        enum: ['tag1', 'tag2', 'tag3'],
        required: false,
      },
    ],
    default: [],
  })
  @ApiProperty()
  tags: string[];

  @Prop({ type: Socials, required: false })
  @ApiProperty()
  socials: Socials;

  @Prop({ required: false })
  @ApiProperty()
  resume: string;

  @Prop({ required: false })
  @ApiProperty()
  bio: string;

  @Prop({ required: false })
  @ApiProperty()
  profile_picture: string;

  @Prop({ select: false, required: true })
  @ApiProperty()
  password: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
