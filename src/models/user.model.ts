import { v4 as uuidv4 } from 'uuid';
import { users } from '../database/memoryDB';


export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export class UserModel {
  public getAllUsers(): Promise<User[]> {
    return Promise.resolve(users);
  }

  public getUserById(id: string): Promise<User | undefined> {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return Promise.resolve(user);
  }

  public createUser(username: string, age: number, hobbies: string[]): Promise<User> {
    const newUser: User = { id: uuidv4(), username, age, hobbies };
    console.log('Creating user:', newUser);  
    users.push(newUser);
    console.log('Current users:', users);
    return Promise.resolve(newUser);
  }

  public updateUser(id: string, updatedUser: Partial<User>): Promise<User> {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error(`User with id ${id} not found`);
    }
    users[index] = { ...users[index], ...updatedUser };
    return Promise.resolve(users[index]);
  }

  public deleteUser(id: string): Promise<boolean> {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return Promise.resolve(false);
    }
    users.splice(index, 1);
    return Promise.resolve(true);
  }
}
