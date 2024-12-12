import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}
  projects: ProjectInterface[] = [{id: 1, name: "Gestor de Tareas", description: "Aplicación para gestionar tareas con React", start_date: new Date(), end_date: new Date(), image: "tasks.jpg", technologies: ["React", "Node.js"], github_link: "github.com/proyecto1", website_link: "proyecto1.com", subtitle: "App de productividad"}, {id: 2, name: "Blog en Next.js", description: "Un blog para desarrolladores", start_date: new Date(), end_date: new Date(), image: "blog.jpg", technologies: ["Next.js", "Tailwind"], github_link: "github.com/proyecto2", website_link: "proyecto2.com", subtitle: "Blog moderno"}, {id: 3, name: "API REST con Express", description: "API RESTful para manejar datos", start_date: new Date(), end_date: new Date(), image: "api.jpg", technologies: ["Node.js", "Express"], github_link: "github.com/proyecto3", website_link: "proyecto3.com", subtitle: "API REST"}];
  data = this.projects
  show(): Array<ProjectInterface> {
    return this.data
  }

  get(id: number) {
    return this.data.find(item => item.id === id)
  }

  delete(id: number) {
    return id
  }

  update(id: number) {
    return id
  }
}
