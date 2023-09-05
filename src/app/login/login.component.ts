import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      signin:[true]
    });
  }


  onSubmit() {
    if (this.loginForm?.valid) {

      if (this.loginForm.value.email == this.authService.data.email) {
        console.log(this.loginForm.value,'val')
        if (this.loginForm.value.password == this.authService.data.password) {
          console.log("true")
          this.router.navigateByUrl("home")
        }
        else {
          alert("incorrect password")
        }
      }
      else {
        alert("invalid email")
      }
    } else {
      console.log('Form is invalid.');
    }
  }
}


