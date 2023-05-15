import path from 'path';
import fs from 'fs/promises';

type UserType = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

class User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];

  constructor({ id, username, age, hobbies }: UserType) {
    this.id = id;
    this.username = username;
    this.age = age;
    this.hobbies = hobbies;
  }

  static async getAllUsers() {
    try {
      const dataPath = path.join(__dirname, '..', '..', 'db', 'db.json');
      const data = await fs.readFile(dataPath, 'utf8');
      const parsedData = JSON.parse(data);
      return parsedData.users;
    } catch (err) {
      throw err;
    }
  }
}

export default User;
