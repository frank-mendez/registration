import { Users } from './users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  getAllUsers(): Users[] {
    return this.users;
  }
}
