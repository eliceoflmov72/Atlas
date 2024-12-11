import { Injectable } from '@angular/core';
import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  posts = [{ id: 1, userId: 1, title: 'Bienvenidos', content: 'A Zemios', creationDate: new Date(), }]; /* * SOLO COMO EJEMPLO; AQUI DEBERIA COGER DEL BACK */
  getAllPosts(): Array<PostInterface> {
    return this.posts
  }

  getPost(id: number) {
    return this.posts.find(post => post.id === id)
  }
}
