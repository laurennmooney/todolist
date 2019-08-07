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
      task: "Complete lab 1, part 1",
      completed: true
    },
    {
      task: "Pack for this weekend",
      completed: false
    },
    {
      task: "Relax a little",
      completed: false
    },
    {
      task: "Practice some code, man",
      completed: false
    },
    { 
      task: "Dishes",
      completed: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
