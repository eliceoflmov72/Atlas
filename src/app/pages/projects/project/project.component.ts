import { ProjectInterface } from './../../../interfaces/project-interface';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  route = inject(ActivatedRoute);
  id: string | null = this.route.snapshot.paramMap.get('id');
  project: ProjectInterface | undefined = inject(ProjectsService).get(
    Number(this.id)
  );
}
