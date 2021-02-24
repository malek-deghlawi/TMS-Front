import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private as:AuthService,private msg:MessageService) { }

  ngOnInit(): void {
  }
  errorS:boolean=false;
  login(e: any) {
    e.preventDefault();
    const target = e.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    this.errorS=false;
    this.as.login(email,password).subscribe((res:any)=>{

      localStorage.setItem('access_token', res.access_token);
      this.msg.setMessage("something happen");
      this.router.navigate(['/task-list']);
    },(err: any) => {
      this.errorS=true;
    })

  }

}
