import { Injectable } from '@angular/core';
import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  posts: PostInterface[] = [{id: 1, userId: 1, title: "Exploring Angular", content: "A deep dive into Angular's new features.", creationDate: new Date("2024-10-16")}, {id: 2, userId: 2, title: "React 18 Overview", content: "A look at React 18 and what it offers.", creationDate: new Date("2024-11-21")}, {id: 3, userId: 3, title: "Why Next.js?", content: "Why developers should switch to Next.js for SSR.", creationDate: new Date("2024-12-02")}];
  /* * SOLO COMO EJEMPLO; AQUI DEBERIA COGER DEL BACK */
  show(): Array<PostInterface> {
    return this.posts
  }

  get(id: number) {
    return this.posts.find(post => post.id === id)
  }

  delete(id: number) {
    return id /* TODO: */
  }
  
  update(id: number) {
    return id /* TODO: Hay que hacerlo?!??¿ */
  }
}
