import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodotaskComponent } from './todotask/todotask.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'task',component:TaskComponent},
    {path:'todolist',component:TodolistComponent},
    {path:'todotask',component:TodotaskComponent},
    {path:'',redirectTo:'/register',pathMatch:'full'}
];
