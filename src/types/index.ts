type UserType = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

type DataType = {
  users: UserType[];
  length: number;
};

export { UserType, DataType };
