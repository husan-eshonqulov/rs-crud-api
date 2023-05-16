import path from 'path';
import fs from 'fs/promises';

import { DataType } from '../types';

const dataPath = path.join(__dirname, '..', '..', 'db', 'db.json');

class User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];

  constructor(id: string, username: string, age: number, hobbies: string[]) {
    this.id = id;
    this.username = username;
    this.age = age;
    this.hobbies = hobbies;
  }

  async save() {
    try {
      const data = await getData();
      const users = data.users;
      users.push(this);
      data.length++;
      const newData = JSON.stringify(data);
      await fs.writeFile(dataPath, newData, 'utf8');
    } catch (err) {
      throw err;
    }
  }

  static async getAllUsers() {
    try {
      const data = await getData();
      const users = data.users;
      return users;
    } catch (err) {
      throw err;
    }
  }

  static async getUser(id: string) {
    try {
      const data = await getData();
      const users = data.users;
      const user = users.filter((u) => u.id === id)[0];
      return user;
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(
    id: string,
    username: string,
    age: number,
    hobbies: string[]
  ) {
    try {
      const data = await getData();
      const users = data.users;
      const user = users.filter((u) => u.id === id)[0];

      if (user) {
        user.username = username;
        user.age = age;
        user.hobbies = hobbies;
      }

      const updatedData = JSON.stringify(data);
      await fs.writeFile(dataPath, updatedData, 'utf8');
      return user ? true : false;
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(id: string) {
    try {
      const data = await getData();
      const users = data.users;
      const oldUsersLen = users.length;
      data.users = users.filter((u) => u.id !== id);
      const updatedData = JSON.stringify(data);
      await fs.writeFile(dataPath, updatedData, 'utf8');
      const newUsersLen = data.users.length;
      return newUsersLen < oldUsersLen;
    } catch (err) {
      throw err;
    }
  }
}

const getData = async () => {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const parsedData: DataType = JSON.parse(data);
    return parsedData;
  } catch (err) {
    throw err;
  }
};

export default User;
