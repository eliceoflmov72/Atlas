import { Component, inject } from '@angular/core';
import { PostInterface } from '../../../interfaces/post-interface';
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  route = inject(ActivatedRoute)
  id: string | null = this.route.snapshot.paramMap.get('id')
  post: PostInterface | undefined = inject(PostsService).getPost(Number(this.id))
}
