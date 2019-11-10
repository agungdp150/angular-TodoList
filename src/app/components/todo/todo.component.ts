import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[];

  constructor(private ts:TodoService) { }

  ngOnInit() {
    this.ts.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    console.log("oke")
    // remove from ui
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    this.ts.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.ts.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }
}
