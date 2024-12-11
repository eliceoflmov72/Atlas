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
  Project: ProjectInterface = {
    id: 1,
    name: 'AW',
    description: 'fd',
    startDate: new Date()
  }
  id: string | null = null
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
