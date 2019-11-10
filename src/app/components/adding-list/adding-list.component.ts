import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adding-list',
  templateUrl: './adding-list.component.html',
  styleUrls: ['./adding-list.component.scss']
})
export class AddingListComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo= {
      title : this.title,
      completed : false
    }

    this.addTodo.emit(todo);
  }

}
