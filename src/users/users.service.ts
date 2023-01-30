import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { User, UserStatus } from './users.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User {
    const { firstName, lastName, email, password, address } = createUserDto;
    const user: User = {
      id: uuid(),
      firstName,
      lastName,
      email,
      password,
      address,
      status: UserStatus.PENDING,
    };

    this.users.push(user);
    return user;
  }

  getUserById(userId: string): User {
    return this.users.find((user) => user.id === userId);
  }

  deleteuserById(userId: string): User[] {
    this.users = this.users.filter((user) => user.id !== userId);
    return this.users;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): User {
    const { firstName, lastName, address, status } = updateUserDto;
    const user = this.getUserById(id);
    user.firstName = firstName ?? user.firstName;
    user.lastName = lastName ?? user.lastName;
    user.address = address ?? user.address;
    user.status = status ?? user.status;
    return user;
  }
}
