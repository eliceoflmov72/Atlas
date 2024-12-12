import { Injectable } from '@angular/core';
import { ProjectCollaboratorInterface } from '../interfaces/project-collaborator-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectCollaboratorsService {

  constructor() { }
  projectCollaborators: ProjectCollaboratorInterface[] = [{id: 1, project_id: 1, user_id: 1}, {id: 2, project_id: 2, user_id: 2}, {id: 3, project_id: 3, user_id: 3}];

}
