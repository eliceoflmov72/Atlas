import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublishComponent } from './publish/publish.component';
import { PostInterface } from '../../interfaces/post-interface';

@Component({
  selector: 'app-explore',
  imports: [RouterLink, PublishComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  publishModal = false;
  togglePublishModal() {
    this.publishModal = !this.publishModal;
  }

  posts: Array<PostInterface> = [
    {
      id: 1,
      userId: 3,
      title: 'Bienvenidos',
      content: 'Que tal',
      creationDate: new Date()
    }
  ]
}
