import { Injectable } from '@angular/core';
import { UserProjectInterface } from '../interfaces/user-project-interface';

@Injectable({
  providedIn: 'root',
})
export class UserProjectsService {
  constructor() {}
  userProjects: UserProjectInterface[] = [
    { id: 1, user_id: 1, project_id: 1, contribution: 'Frontend con React' },
    { id: 2, user_id: 2, project_id: 2, contribution: 'Backend con Node.js' },
    { id: 3, user_id: 3, project_id: 3, contribution: 'Fullstack con Express' },
  ];
  data = this.userProjects;
  show(): Array<UserProjectInterface> {
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
