import { Injectable } from '@angular/core';
import { CommentInterface } from '../interfaces/comment-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor() { }
  comments: CommentInterface[] = [{id: 1, postId: 1, userId: 2, content: "Great insights on Angular!", creationDate: new Date("2024-10-17")}, {id: 2, postId: 2, userId: 1, content: "Thanks for the React 18 breakdown!", creationDate: new Date("2024-11-22")}, {id: 3, postId: 3, userId: 3, content: "Next.js is amazing!", creationDate: new Date("2024-12-03")}];
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
