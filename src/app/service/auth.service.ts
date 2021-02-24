import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8000/oauth/token';
  apiUrl = 'http://localhost:8000/api';
  options: any;
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    };
   }
  login(email:string ,password:string ){

    return this.http.post(this.authUrl, {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'uFPTLF4XNN4HKT7kJJVkBSNWnLMtlhzT2czHbGZi',
      username: email,
      password: password,
      scope: ''
    }, this.options);
  }
  register(name:string,email:string ,password:string ){

    return this.http.post(this.apiUrl+'/register', {
      name:name,
      email: email,
      password: password,
    }, this.options);
  }
  logout() {
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + localStorage.getItem('access_token')
      })
    };

    return this.http.get(this.apiUrl + '/token/revoke', this.options);
  }
}
