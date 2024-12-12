import { Injectable } from '@angular/core';
import { NewsInterface } from '../interfaces/news-interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  news: NewsInterface[] = [{id: 1, title: "Nuevo lanzamiento de Angular", content: "La nueva versión incluye...", publication_date: new Date(), category: "Frameworks", image: "angular.jpg", author_id: 1}, {id: 2, title: "JavaScript cumple 25 años", content: "Un recorrido por la historia...", publication_date: new Date(), category: "Lenguajes", image: "javascript.jpg", author_id: 2}, {id: 3, title: "React mejora el rendimiento", content: "La última actualización de React...", publication_date: new Date(), category: "Frameworks", image: "react.jpg", author_id: 3}];

}
