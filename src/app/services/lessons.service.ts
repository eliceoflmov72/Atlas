import { Injectable } from '@angular/core';
import { LessonInterface } from '../interfaces/lesson-interface';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  constructor() {}
  lessons: LessonInterface[] = [
    {
      id: 1,
      module_id: 1,
      title: 'Entendiendo los Closures',
      content: 'Un closure es una función...',
      exercise: 'Crea un closure que...',
      lesson_order: 1,
    },
    {
      id: 2,
      module_id: 2,
      title: 'Componentes en React',
      content: 'Los componentes son la base...',
      exercise: 'Crea un componente que...',
      lesson_order: 1,
    },
    {
      id: 3,
      module_id: 3,
      title: 'Manejo de rutas en Express',
      content: 'Express permite crear rutas...',
      exercise: 'Crea una ruta que maneje...',
      lesson_order: 1,
    },
  ];
  data = this.lessons;
  show(): Array<LessonInterface> {
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
