import { Injectable } from '@angular/core';
import { ProjectCollaboratorsInterface } from '../interfaces/project-collaborators-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectCollaboratorsService {

  constructor() { }
  projectCollaborators: ProjectCollaboratorsInterface[] = [{id: 1, project_id: 1, user_id: 1}, {id: 2, project_id: 2, user_id: 2}, {id: 3, project_id: 3, user_id: 3}];

}
