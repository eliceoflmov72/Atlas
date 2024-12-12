import { Injectable } from '@angular/core';
import { UserProgressInterface } from '../interfaces/user-progress-interface';

@Injectable({
  providedIn: 'root'
})
export class UserProgressService {

  constructor() { }
  userProgress: UserProgressInterface[] = [{id: 1, user_id: 1, course_id: 1, module_id: 1, lesson_id: 1, completed: true, completed_at: new Date()}, {id: 2, user_id: 2, course_id: 2, module_id: 2, lesson_id: 2, completed: false, completed_at: new Date()}, {id: 3, user_id: 3, course_id: 3, module_id: 3, lesson_id: 3, completed: true, completed_at: new Date()}];
  data = this.userProgress
  show(): Array<UserProgressInterface> {
    return this.data
  }

  get(id: number) {
    return this.data.find(item => item.id === id)
  }

  delete(id: number) {
    return id
  }

  update(id: number) {
    return id
  }
}
