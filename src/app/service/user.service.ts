import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  server: string = "http://127.0.0.1:8000/api/user/"
  headers: HttpHeaders = new HttpHeaders();
  options: any;
  constructor(private http: HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    // this.headers.append('Access-Control-Request-Method', 'get');

    this.headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
    this.options = {
      headers: this.headers
    }

  }
  getUsers(): Observable<User[]> {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.get<User[]>(this.server + 'list',{
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token')
      })
    });

  }
}
