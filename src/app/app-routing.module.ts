import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TaskDetailsComponent } from './component/task/task-details/task-details.component';
import { TaskFormComponent } from './component/task/task-form/task-form.component';
import { TaskListComponent } from './component/task/task-list/task-list.component';
import { TaskComponent } from './component/task/task.component';
import { AuthGuardService } from './services/auth-guard.service';
import { GuestGuardService } from './services/guest-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent , canActivate:[GuestGuardService ]},
  {path:'register',component:RegisterComponent , canActivate:[GuestGuardService ]},
  {path:'add-task',component:TaskFormComponent,canActivate: [ AuthGuardService ]},
  {path:'task-list',component:TaskListComponent,canActivate: [ AuthGuardService ]},
  {path:'task/:id',component:TaskDetailsComponent,canActivate: [ AuthGuardService ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
