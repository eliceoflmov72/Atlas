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
  id: string | null = null
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
