import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private as: AuthService) { }
  nameError :string='';
  mailError :string='';
  passwordError :string='';
  // mailError :string='';
  ngOnInit(): void {
  }
  register(e: any) {
    e.preventDefault();
    const target = e.target;
    const name = target.querySelector('#username').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    this.nameError='';
    this.mailError='';
    this.passwordError='';

      // }
      this.as.register(name,email, password).subscribe((res: any) => {

        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['task-list']);
      }, (err: any) => {
        console.log(err);
        if(err.error.name!=undefined){
          this.nameError = err.error.name;
        }else{
          this.nameError='';
        }
        if(err.error.email!=undefined){
          this.mailError = err.error.email;
        }else{
          this.mailError='';
        }
        if(err.error.password!=undefined){
          this.passwordError = err.error.password;
        }else{
          this.passwordError='';
        }
      })



    // if (name === password) {
    //   this.router.navigateByUrl('add-task');
    // }


  }

}
