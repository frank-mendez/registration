import { UserStatus } from './../users.model';
export class UpdateUserDto {
  firstName: string;
  lastName: string;
  address: string;
  status: UserStatus;
}
