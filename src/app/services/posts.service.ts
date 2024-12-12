import { Injectable } from '@angular/core';
import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  posts: PostInterface[] = [{id: 1, user_id: 1, title: "Introducción a TypeScript", content: "TypeScript es un superconjunto de JS...", creation_date: new Date()}, {id: 2, user_id: 2, title: "Guía de Hooks en React", content: "Los hooks son una nueva adición...", creation_date: new Date()}, {id: 3, user_id: 3, title: "Cómo usar MongoDB con Node.js", content: "En esta guía veremos cómo conectar...", creation_date: new Date()}];

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
