import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    {
      task: "Drink a gallon of coffee",
      completed: true
    },
    { 
      task: "Question life choices",
      completed: true
    },
    { 
      task: "Cry a little",
      completed: true
    },
    {
      task: "Complete lab 1, part 1",
      completed: true
    },
    {
      task: "Pack for this weekend",
      completed: false
    },
    {
      task: "Relax, maybe?",
      completed: false
    },
    {
      task: "Practice some code, man",
      completed: true
    },
    {
      task: "Clean my room",
      completed: false
    },
  ];

  constructor() { }

  removeItem(index: number): void {
    this.todoList.splice(index, 1);
  }

  ngOnInit() {
  }

}
