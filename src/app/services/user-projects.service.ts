import { Injectable } from '@angular/core';
import { UserProjectsInterface } from '../interfaces/user-projects-interface';

@Injectable({
  providedIn: 'root'
})
export class UserProjectsService {

  constructor() { }
  userProjects: UserProjectsInterface[] = [{id: 1, user_id: 1, project_id: 1, contribution: "Frontend con React"}, {id: 2, user_id: 2, project_id: 2, contribution: "Backend con Node.js"}, {id: 3, user_id: 3, project_id: 3, contribution: "Fullstack con Express"}];

}
