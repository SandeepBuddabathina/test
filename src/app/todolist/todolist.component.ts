import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodService } from '../service/tod.service';
//imported tod dervice from service
export class FeatureModule {}
@Component({
  selector: 'app-todolist',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
//implements onint 
export class TodolistComponent implements OnInit{
  todos: any;   // taking an empty var as any
  todoList:any= ''; // taking an an empty var to store 
  
  constructor(private ts:TodService){} //injecting tod service in constructor 

ngOnInit(): void {
this.todos=this.ts.todoList;  //assigning todolist value to todos
this.todoList=''
}
// functon for delete
deleteTodo(index: number) {
  this.todos.splice(index, 1); 
}
//for stike out the afrer completed the task
complete(task: any) {
  task.completed = !task.completed;
}
  
}
