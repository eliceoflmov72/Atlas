import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
      registration_date: new Date(),
      password: 'hashed_password1',
      about_me: 'Desarrollador Frontend',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Ana Gómez',
      email: 'ana@example.com',
      registration_date: new Date(),
      password: 'hashed_password2',
      about_me: 'Desarrolladora Backend',
      role: 'user',
    },
    {
      id: 3,
      name: 'Luis Martínez',
      email: 'luis@example.com',
      registration_date: new Date(),
      password: 'hashed_password3',
      about_me: 'Fullstack Developer',
      role: 'user',
    },
  ];
  data = this.users;
  show(): Array<UserInterface> {
    return this.data;
  }

  get(id: number) {
    return this.data.find((item) => item.id === id);
  }

  delete(id: number) {
    return id;
  }

  update(id: number) {
    return id;
  }
}
