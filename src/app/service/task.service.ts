import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Task} from '../Task'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  server :string = "http://127.0.0.1:8000/api/tasks/"
  headers: HttpHeaders = new HttpHeaders();
  options: any;
  constructor(private http:HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    // this.headers.append('Access-Control-Request-Method', 'get');

    this.headers.append('Access-Control-Allow-Origin','http://127.0.0.1:8000');
    this.options = {
      headers: this.headers
   }
  }
  addTask(description:string ,deadline:string,categories:[],assigen_to:[] ):Observable<Task>
  {
    const task=new Task(description,deadline,categories,assigen_to);
    return this.http.post<Task>(this.server+'add',task,{
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token'),
      })
    });

  }
  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.server+'list',{
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token'),
      })
    });

  }
  Show(id:any):Observable<Task>
  {
    const newTask = {
      id:id,
      title:'not set',
      date :new Date()
    };
    return this.http.post<Task>(this.server+'show',newTask,{
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token'),
        'Access-Control-Allow-Origin':'*'
      })
    });
  }
  UpdateFlag(id:any,flag:any):Observable<Task>
  {
    const newTask = {
      id:id,
      title:'not set',
      end_falg:flag,
    };
    return this.http.post<Task>(this.server+'updateflag',newTask,{
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token'),
        'Access-Control-Allow-Origin':'*'
      })
    });
  }
}
