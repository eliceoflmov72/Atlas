import { Injectable } from '@angular/core';
import { ProjectCollaboratorInterface } from '../interfaces/project-collaborator-interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectCollaboratorsService {
  constructor() {}
  projectCollaborators: ProjectCollaboratorInterface[] = [
    { id: 1, project_id: 1, user_id: 1 },
    { id: 2, project_id: 2, user_id: 2 },
    { id: 3, project_id: 3, user_id: 3 },
  ];
  data = this.projectCollaborators;
  show(): Array<ProjectCollaboratorInterface> {
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
