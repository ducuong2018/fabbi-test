// create-user.dto.ts

import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4, { message: 'Login must be at least 4 characters long' })
  @MaxLength(20, { message: 'Login must not exceed 20 characters' })
  @IsNotEmpty({ message: 'Login is required' })
  login: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(30, { message: 'Password must not exceed 30 characters' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
