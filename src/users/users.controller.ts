import { UpdateUserDto } from './dto/updateUser.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): User {
    const user = this.userService.getUserById(id);
    console.log('user', user);
    if (!user) {
      throw new NotFoundException(`User with ID: ${id} not found`);
    }
    return user;
  }

  @Delete('/:id')
  deleteUserById(@Param('id') id: string): User[] {
    return this.userService.deleteuserById(id);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): User {
    return this.userService.updateUser(id, updateUserDto);
  }
}
