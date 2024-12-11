import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInterface } from '../../interfaces/project-interface';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Array<ProjectInterface> = [{
    id: 1,
    name: 'Animalisima',
    subtitle: 'Una página web sobre animales',
    description: 'Este es el proyecto 14 de ZEMIOS!!!',
    image: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    startDate: new Date()
  }]
}
