export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  status: UserStatus;
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  ARCHIVED = 'ARCHIVED',
}
