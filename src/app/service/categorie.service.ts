import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Categorie } from '../Categorie'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  server: string = "http://127.0.0.1:8000/api/categories/"
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
  getCategories(): Observable<Categorie[]> {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.get<Categorie[]>(this.server + 'list',{
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token')
      })
    });

  }
}
