import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService.getTodos().pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    ).subscribe(todos => {
      this.todoItems.set(todos);
    });
  }


  updateTodoCompleted(todoItem: Todo){
    this.todoItems.update((todos) => {
      return todos.map(todo => todo.id === todoItem.id ? {...todo, completed: !todo.completed} : todo);
    })
  }
}
