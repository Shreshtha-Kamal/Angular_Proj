import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  obj : any = {}
  constructor() { }

  setData(data : any){
    this.obj = data;
  }
  getstudent(){
    return this.obj
  }
}
