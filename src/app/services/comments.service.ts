import { Injectable } from '@angular/core';
import { CommentInterface } from '../interfaces/comment-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor() { }
  comments: CommentInterface[] = [{ id: 1, post_id: 1, user_id: 1, content: "Muy buen artículo sobre TypeScript!", creation_date: new Date() }, { id: 2, post_id: 2, user_id: 2, content: "Este post me ayudó a entender React Hooks.", creation_date: new Date() }, { id: 3, post_id: 1, user_id: 3, content: "¿Podrías profundizar en los tipos genéricos?", creation_date: new Date() }];

  show(): Array<CommentInterface> {
    return this.comments
  }

  get(id: number) {
    return this.comments.find(comment => comment.id === id)
  }

  delete(id: number) {
    return id /* TODO: */
  }

  update(id: number) {
    return id /* TODO: Hay que hacerlo?!??¿ */
  }
}
