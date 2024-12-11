import { Component } from '@angular/core';
import { PostInterface } from '../../../interfaces/post-interface';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  post: PostInterface = {
    id: 1,
    title: 'Bien',
    content: 'HOLAAA',
    userId: 1,
    creationDate: new Date(),
  }

}
