import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select2Option } from 'ng-select2-component';
import { Categorie } from 'src/app/Categorie';
import { CategorieService } from 'src/app/service/categorie.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/User';
import { TaskService } from '../../../service/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private router: Router,
    private ts: TaskService,
    private cs: CategorieService,
    private us: UserService) { }
  description: string = '';
  deadline: string = '';
  dError: boolean = false;
  eError: boolean = false;
  cError: boolean = false;
  aError: boolean = false;
  public Assign: [] = [];
  public Categories: [] = [];
  categories: Categorie[] = [];
  users: User[] = [];
  public exampleData: Array<Select2Option> = [
    {
      value: 'basic1',
      label: 'Basic 1' + 'basic1'
    },
    {
      value: 'basic2',
      label: 'Basic 2'
    },
    {
      value: 'basic3',
      label: 'Basic 3'
    },
    {
      value: 'basic4',
      label: 'Basic 4'
    }
  ];
  public catData: Array<Select2Option> = [];
  public userData: Array<Select2Option> = [];

  ngOnInit(): void {
    this.getCategories();
    this.getUsers();
  }
  Add(e: any) {

    e.preventDefault();
    this.dError = false;
    this.eError = false;
    this.cError = false;
    this.aError = false;
    const target = e.target;
    if (this.description === '') {
      this.dError = true;
      return;
    }
    if (this.deadline === '') {
      this.eError = true;
      return;
    }
    if (this.Categories.length === 0) {
      console.log('ssss');

      this.cError = true;
      return;
    }
    if (this.Assign.length === 0) {
      this.aError = true;
      return;
    }

    this.ts.addTask(this.description, this.deadline, this.Categories, this.Assign).subscribe((data) => {

      this.router.navigateByUrl('task-list');
    },
      (err) => {
        if (err.status === 401) {
          localStorage.removeItem('access_token');
          this.router.navigate(['/login']);
        }
      }
    );

  }
  updateAssign(e: any) {
    this.Assign = e.value;
  }
  updateCategories(e: any) {
    this.Categories = e.value;

  }
  getCategories() {
    this.cs.getCategories().subscribe((data) => {
      this.categories = data;

      for (let cat of this.categories) {
        this.catData.push({
          value: cat.id,
          label: cat.name + " | " + cat.color,
        });
      }

    })
  }
  getUsers() {
    this.us.getUsers().subscribe((data) => {
      this.users = data;

      for (let user of this.users) {
        this.userData.push({
          value: user.id,
          label: user.name + " | " + user.email,
        });
      }

    })
  }
}
