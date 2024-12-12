import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublishComponent } from './publish/publish.component';
import { PostInterface } from '../../interfaces/post-interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-explore',
  imports: [RouterLink, PublishComponent],
  providers: [],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  publishModal = false;
  togglePublishModal() {
    this.publishModal = !this.publishModal;
  }

  private readonly postsSvc = inject(PostsService)
  posts: Array<PostInterface> = this.postsSvc.show();
}
