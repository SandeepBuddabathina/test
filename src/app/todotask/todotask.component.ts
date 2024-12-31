import { Component } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { TodolistComponent } from "../todolist/todolist.component";
import { TodService } from '../service/tod.service';

@Component({
  selector: 'app-todotask',
  imports: [TaskComponent, TodolistComponent],
  templateUrl: './todotask.component.html',
  styleUrl: './todotask.component.css'
})

export class TodotaskComponent {

}
