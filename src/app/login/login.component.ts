import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    // Initialize the form
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      let userInfo = JSON.parse(localStorage.getItem('userInfo')!);
      console.log(userInfo);
      if(this.userForm.value.email == userInfo.email){
        if(this.userForm.value.password == userInfo.password){
          this.router.navigate(['/todotask']);
        } else {
          this.toastr.error('Password did not match');
        }
       } else {
          this.toastr.error('Email not matched');
        }
      } else {
      this.toastr.error('Please fill out all required fields!');
    }
  }
}
