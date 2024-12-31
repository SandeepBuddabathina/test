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
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    // Initialize the form
    this.userForm = this.fb.group({
      name: ['', Validators.required], // Required field
      email: ['', [Validators.required, Validators.email]], // Email validation
      mobile: ['', Validators.required], // Dropdown required
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userForm.value.password == this.userForm.value.confirmpassword) {
        this.toastr.success('Form Submitted Successfully!');
        if (delete this.userForm.value.confirmpassword) {
          localStorage.setItem('userInfo', JSON.stringify(this.userForm.value));
          this.router.navigate(['/login']);
        } else {
          this.toastr.error('Something went wrong');
        }
      } else {
        this.toastr.error('Password did not matched');
      }
    } else {
      this.toastr.error('Please fill out all required fields!');
    }
  }
}
