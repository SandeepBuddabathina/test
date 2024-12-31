import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TodService } from '../service/tod.service';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  //importing the tod service from service
  todoIn: any;
  //injecting service in constructor
  constructor(private ts:TodService){}
  //add method for to add task
addTask() {
  this.ts.addTodo(this.todoIn);
  //to refresh the input 
  this.todoIn=""
}

}
