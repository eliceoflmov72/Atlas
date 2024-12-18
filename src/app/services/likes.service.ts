import { Injectable } from '@angular/core';
import { LikeInterface } from '../interfaces/like-interface';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  constructor() {}
  likes: LikeInterface[] = [
    { id: 1, user_id: 1, post_id: 1, news_id: 1 },
    { id: 2, user_id: 2, post_id: 2, news_id: 2 },
    { id: 3, user_id: 3, post_id: 3, news_id: 3 },
  ];
  data = this.likes;
  show(): Array<LikeInterface> {
    return this.data;
  }

  get(id: number) {
    return this.data.find((item) => item.id === id);
  }

  delete(id: number) {
    return id;
  }

  update(id: number) {
    return id;
  }
}
