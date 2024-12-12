import { Injectable } from '@angular/core';
import { LessonsInterface } from '../interfaces/lessons-interface';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor() { }
  lessons: LessonsInterface[] = [{id: 1, module_id: 1, title: "Entendiendo los Closures", content: "Un closure es una función...", exercise: "Crea un closure que...", lesson_order: 1}, {id: 2, module_id: 2, title: "Componentes en React", content: "Los componentes son la base...", exercise: "Crea un componente que...", lesson_order: 1}, {id: 3, module_id: 3, title: "Manejo de rutas en Express", content: "Express permite crear rutas...", exercise: "Crea una ruta que maneje...", lesson_order: 1}];

}
