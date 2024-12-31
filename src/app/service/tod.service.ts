import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodService {
  todoList:any=[] //taking the empty arry to store data
  constructor() { }
  addTodo(taskName: any){   //method with value to push the data to todoList aarray
    this.todoList.push({todoList:taskName})
    console.log(taskName)
  }
}
