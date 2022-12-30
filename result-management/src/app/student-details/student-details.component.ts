import { AuthService } from './../auth.service';
import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { studentdetails } from './studentdetails.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  
  formValue !: FormGroup;
  studentmodelobj : studentdetails = new studentdetails()
  student: any;
  showAdd !: boolean
  showUpdate !: boolean
  constructor(private formBuilder: FormBuilder,private api:ApiService,private authservice :AuthService,private router:Router) { 
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      roll_No : [' ', Validators.required],
      name : [' ',Validators.required],
      dob : [' ',Validators.required],
      score : [' ',Validators.required],
    })
    this.getStudentdetails();
  }

  logout() {  
    console.log('logout');  
    this.authservice.logout();  
    this.router.navigate(['']);  
  } 

  clickAdd()
  {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postStudentdetails(){
    this.studentmodelobj.roll_No = this.formValue.value.roll_No;
    this.studentmodelobj.name = this.formValue.value.name;
    this.studentmodelobj.dob = this.formValue.value.dob;
    this.studentmodelobj.score = this.formValue.value.score;

    this.api.postdetails(this.studentmodelobj).subscribe((res: any)=>{
      alert('Saved Successfully');
      let ress = document.getElementById('cancel');
      ress?.click(); 
      this.formValue.reset();
      this.getStudentdetails();
    },
    (err: any)=>{
      alert('Something went wrong')
    })
  }
  
  getStudentdetails()
  {
    this.api.getdetails().subscribe(res=>{
      this.student = res;
    })
  }
  deletestudent(i : any)
  {
    this.api.deletedetails(i.id).subscribe(res=>{
      alert("Do you want to delete it?");
      this.getStudentdetails();
    })
  }
  editDetails(i:any)
  {
    this.showAdd = false;
    this.showUpdate = true;
    this.studentmodelobj.id = i.id;
    this.formValue.controls['roll_No'].setValue(i.roll_No);
    this.formValue.controls['name'].setValue(i.name);
    this.formValue.controls['dob'].setValue(i.dob);
    this.formValue.controls['score'].setValue(i.score);
  }
  updateDetails()
  {
    this.studentmodelobj.roll_No = this.formValue.value.roll_No;
    this.studentmodelobj.name = this.formValue.value.name;
    this.studentmodelobj.dob = this.formValue.value.dob;
    this.studentmodelobj.score = this.formValue.value.score;
    this.api.updatedetails(this.studentmodelobj,this.studentmodelobj.id).subscribe(res=>{
      alert('Updated Successfully');
      let ress = document.getElementById('cancel');
      ress?.click(); 
      this.formValue.reset();
      this.getStudentdetails();
    })
  }
}
