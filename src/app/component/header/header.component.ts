import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private as: AuthService, private msg: MessageService) { }

  isLog: boolean;
  ngOnInit(): void {
    this.msg.getMessage().subscribe((data) => {
      this.isLogedin();
    });
    this.isLogedin();
  }

  logout(e: any) {
    localStorage.removeItem('access_token');

    this.as.logout()
      .subscribe(() => {
        localStorage.removeItem('access_token');
        this.isLog = false;
        this.router.navigate(['/login']);
      }, (err: any) => {
        this.router.navigate(['/login']);
      });
  }
  isLogedin() {

    if (
      localStorage.getItem('access_token')
    ) {
      this.isLog = true;
      return true;
    }
    this.isLog = false;
    return false;
  }

}
