import path from 'path';
import fs from 'fs/promises';

import { UserType, DataType } from '../types';

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
      const dataPath = path.join(__dirname, '..', '..', 'db', 'db.json');
      const data = await fs.readFile(dataPath, 'utf8');
      const parsedData: DataType = JSON.parse(data);
      parsedData.users.push(this);
      const jsonData = JSON.stringify(parsedData);
      await fs.writeFile(dataPath, jsonData, 'utf8');
    } catch (err) {
      throw err;
    }
  }

  static async getAllUsers() {
    try {
      const dataPath = path.join(__dirname, '..', '..', 'db', 'db.json');
      const data = await fs.readFile(dataPath, 'utf8');
      const parsedData: DataType = JSON.parse(data);
      return parsedData.users;
    } catch (err) {
      throw err;
    }
  }

  static async getUser(id: string) {
    try {
      const dataPath = path.join(__dirname, '..', '..', 'db', 'db.json');
      const data = await fs.readFile(dataPath, 'utf8');
      const parsedData: DataType = JSON.parse(data);
      const users = parsedData.users;
      const user = users.filter((u: UserType) => u.id === id);
      return user[0];
    } catch (err) {
      throw err;
    }
  }
}

export default User;
