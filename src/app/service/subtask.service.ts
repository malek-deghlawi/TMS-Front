import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SubTask} from '../SubTask'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  server :string = "http://127.0.0.1:8000/api/tasks/"
  headers: HttpHeaders = new HttpHeaders();
  options: any;
  constructor(private http:HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.headers.append('Access-Control-Allow-Origin','http://127.0.0.1:8000');
    this.options = {
      headers: this.headers
   }
   }
   addSubTask(text:string ,task_id:string ):Observable<SubTask>
   {
     const task=new SubTask(text,task_id);
     return this.http.post<SubTask>(this.server+'addSubTask',task,{
       headers: new HttpHeaders({
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization':'Bearer ' + localStorage.getItem('access_token'),
       })
     });

   }
}
