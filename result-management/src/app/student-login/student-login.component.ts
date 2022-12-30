import { HttpClient} from '@angular/common/http';
import { ResultService } from './../shared/result.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  formValue !: FormGroup;
  permit: boolean = false
  view = new FormGroup({
    roll_No: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required)
  })
  submitted = false;

  constructor(private router: Router ,private service : ResultService,private http:HttpClient,private formBuilder: FormBuilder) { }
   
  ngOnInit(): void {
    this.view = this.formBuilder.group({
      roll_No : ['',Validators.required],
      dob : ['',Validators.required]
    })
  }
  roll_No:any;
  name:any;
  dob:any;
  score:any;

  search(): void
  {
      this.http.get<any>("http://localhost:3000/posts").subscribe((res:any)=>{
        const user = res.find((a:any)=>{
          return a.roll_No === this.view.value.roll_No && a.dob === this.view.value.dob
        });
        
        // console.warn(user);
        if(user){
          this.permit=true
          //alert("login successful");
          this.service.setData(user)
          this.view.reset();    
          this.router.navigate(['studentCard'])
        }else{
          alert("Student not found");
        }
      })
  }
  reset(){
     
    this.permit=false
    this.router.navigateByUrl('/student')
  }
}
