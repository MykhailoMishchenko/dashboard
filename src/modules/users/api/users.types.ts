export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  email: string;
  age: number;
  role: string;
  height: string;
  weight: string;
  birthDate: string;
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

export const UserEndpoints = {
  USERS: "https://dummyjson.com/users",
} as const;
