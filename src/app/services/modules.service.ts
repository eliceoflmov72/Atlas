import { Injectable } from '@angular/core';
import { ModuleInterface } from '../interfaces/module-interface';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  constructor() {}
  modules: ModuleInterface[] = [
    {
      id: 1,
      course_id: 1,
      title: 'Closures',
      description: 'Entiende los closures en JS',
      module_order: 1,
    },
    {
      id: 2,
      course_id: 2,
      title: 'Hooks en React',
      description: 'Aprende sobre los hooks de React',
      module_order: 1,
    },
    {
      id: 3,
      course_id: 3,
      title: 'Express básico',
      description: 'Manejo de rutas en Express',
      module_order: 1,
    },
  ];
  data = this.modules;
  show(): Array<ModuleInterface> {
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
