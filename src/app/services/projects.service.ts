import { Injectable } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}
  projects: ProjectInterface[] = [{id: 1, name: "Angular News App", description: "A news application built with Angular.", startDate: new Date("2024-07-01"), endDate: new Date("2024-09-01"), technologies: ["Angular", "TypeScript", "Firebase"], githubLink: "https://github.com/alice/angular-news", websiteLink: "https://angularnews.com", subtitle: "Stay updated with the latest Angular news."}, {id: 2, name: "React Blog", description: "A blog platform powered by React 18.", startDate: new Date("2024-05-15"), technologies: ["React", "Node.js", "MongoDB"], githubLink: "https://github.com/bob/react-blog", websiteLink: "https://reactblog.com", subtitle: "Share your thoughts with the world using React."}, {id: 3, name: "Next.js Portfolio", description: "A personal portfolio website built with Next.js.", startDate: new Date("2024-04-10"), endDate: new Date("2024-06-01"), technologies: ["Next.js", "Tailwind CSS"], githubLink: "https://github.com/charlie/next-portfolio", websiteLink: "https://charlieportfolio.com", subtitle: "Showcase your work with Next.js."}];
  show(): Array<ProjectInterface> {
    return this.projects
  }

  get(id: number) {
    return this.projects.find(project => project.id === id)
  }

  delete(id: number) {
    return id /* TODO: */
  }
  
  update(id: number) {
    return id /* TODO: Hay que hacerlo?!??¿ */
  }
}
