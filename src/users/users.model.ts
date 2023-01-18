export interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  status: UserStatus;
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  ARCHIVED = 'ARCHIVED',
}
