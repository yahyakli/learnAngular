import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      title: 'test',
      id: 0,
      userId: 1,
      completed: false
    },
    {
      title: 'test',
      id: 1,
      userId: 4,
      completed: true
    },
    {
      title: 'test',
      id: 2,
      userId: 5,
      completed: false
    },
  ]
  constructor() { }
}
