import { ProjectInterface } from './../../../interfaces/project-interface';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  route = inject(ActivatedRoute)
  project: ProjectInterface = {
    id: 1,
    name: 'Animalisima',
    subtitle: 'Una página web sobre animales',
    description: 'Este es el proyecto 14 de ZEMIOS!!!',
    image: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    startDate: new Date()
  }
  id: string | null = null
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
