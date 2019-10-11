import { Component } from '@angular/core';
interface Todo {
  task:string;
  completed:boolean;
}
@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'To Do List';
  completed: boolean = true;
  newTask: string;
  // newItem: string;
  tasks: Todo[] = [
{completed: false, task: 'Walk the dog'},
{completed: true, task: 'Go to the store'},
{completed: false, task: 'et gas'},
{completed: false, task: 'Wash Car'},
  ]

  Add() {
    const newItem = {
      task: this.newTask,
      completed: false
    }
    this.tasks.push(newItem)
    this.newTask = null;
  }


  doneClicked() {
    const done = {
      done: this.completed,
      completed: true
}
  this.completed = true;

}
}



