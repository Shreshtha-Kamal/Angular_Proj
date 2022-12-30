import { Router } from '@angular/router';
//import { ResultService } from './../shared/result.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ResultService } from '../shared/result.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  data: any = [];
  constructor(private service : ResultService,private router : Router, private authservice :AuthService) { 
  }
  ngOnInit(): void {
    this.data = this.service.getstudent();
  }
  logout() {  
    console.log('logout');  
    this.authservice.logout();  
    this.router.navigate(['']);  
  } 

}
