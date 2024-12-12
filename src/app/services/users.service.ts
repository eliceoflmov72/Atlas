import { Injectable } from '@angular/core';
import { UsersInterface } from '../interfaces/users-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }
  users: UsersInterface[] = [{ id: 1, name: "Alice Developer", email: "alice@webdev.com", password: "password123", role: "author", registrationDate: new Date("2024-01-01"), aboutMe: "I love Angular and frontend development." }, { id: 2, name: "Bob Coder", email: "bob@frontend.com", password: "password456", role: "author", registrationDate: new Date("2024-02-10"), aboutMe: "React enthusiast and JavaScript developer." }, { id: 3, name: "Charlie Admin", email: "charlie@fullstack.com", password: "adminPass789", role: "admin", registrationDate: new Date("2024-03-20"), aboutMe: "Full stack developer and admin of this platform." }];
  show(): Array<UsersInterface> {
    return this.users
  }

  get(id: number) {
    return this.users.find(user => user.id === id)
  }

  delete(id: number) {
    return id /* TODO: */
  }

  update(id: number) {
    return id /* TODO: Hay que hacerlo?!??¿ */
  }
}
