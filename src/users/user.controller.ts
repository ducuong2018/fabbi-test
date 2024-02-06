// user.controller.ts

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user: Partial<User> = {
      ...createUserDto,
    };
    return this.userService.create(user as User);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: { password: string },
  ): Promise<User | null> {
    const updates: Partial<User> = {
      password: updateUserDto.password,
    };
    return this.userService.update(id, updates);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
