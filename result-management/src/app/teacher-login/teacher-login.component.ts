import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

 
@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})


export class TeacherLoginComponent implements OnInit {

  dummy = "Vagisha@21"
  constructor(private fb: FormBuilder,private router: Router, private authservice: AuthService  ) { }
  
  ngOnInit(): void {
    this.authservice.logout();  
     
  }
  // loginForm: FormGroup = this.fb.group({
  //   password: ['', [Validators.required, Validators.minLength(5)]]
  // })

  onLogin(event : any) {
    event.preventDefault()
    const target = event.target
    const password = target.querySelector('#password').value
    if(password == this.dummy)
    {
      localStorage.setItem('isLoggedIn', "true");  
      localStorage.setItem('token', password.value);  
      this.router.navigate(['/studentdetails'])

    }
    else {
      window.alert("Password Incorrect")
    }
  }
}
