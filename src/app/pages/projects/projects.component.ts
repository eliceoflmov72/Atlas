import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectInterface } from '../../interfaces/project-interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly postsSvc = inject(ProjectsService);
  projects: Array<ProjectInterface> = this.postsSvc.show();
}
