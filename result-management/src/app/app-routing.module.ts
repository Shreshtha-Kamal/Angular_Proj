import { StudentCardComponent } from './student-card/student-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
// import { EditRecordComponent } from './edit-record/edit-record.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';

//const routes: Routes = [];
const approute:Routes = [
  {path:'',component : FirstPageComponent},
  {path:'teacherlogin',component : TeacherLoginComponent},
  {path:'studentdetails',component : StudentDetailsComponent, canActivate : [AuthGuard] },
  {path:'studentlogin',component : StudentLoginComponent},
  // {path:'editRecord',component : EditRecordComponent},
  {path:'studentCard',component:StudentCardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(approute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
