import { Injectable } from '@angular/core';
import { ModulesInterface } from '../interfaces/modules-interface';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor() { }
  modules: ModulesInterface[] = [{id: 1, course_id: 1, title: "Closures", description: "Entiende los closures en JS", module_order: 1}, {id: 2, course_id: 2, title: "Hooks en React", description: "Aprende sobre los hooks de React", module_order: 1}, {id: 3, course_id: 3, title: "Express básico", description: "Manejo de rutas en Express", module_order: 1}];

}
