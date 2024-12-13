import { Injectable } from '@angular/core';
import { NewsInterface } from '../interfaces/news-interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}
  news: NewsInterface[] = [
    {
      id: 1,
      title: 'Nuevo lanzamiento de Angular',
      content: 'La nueva versión incluye...',
      publication_date: new Date(),
      category: 'actualidad',
      image: 'angular.jpg',
      author_id: 1,
    },
    {
      id: 2,
      title: 'JavaScript cumple 25 años',
      content: 'Un recorrido por la historia...',
      publication_date: new Date(),
      category: 'empleo',
      image: 'javascript.jpg',
      author_id: 2,
    },
    {
      id: 3,
      title: 'React mejora el rendimiento',
      content: 'La última actualización de React...',
      publication_date: new Date(),
      category: 'actualidad',
      image: 'react.jpg',
      author_id: 3,
    },
  ];
  data = this.news;
  show(): Array<NewsInterface> {
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
