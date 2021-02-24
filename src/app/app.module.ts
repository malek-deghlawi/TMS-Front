import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Select2Module } from "ng-select2-component";
import { TaskComponent } from './component/task/task.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TaskFormComponent } from './component/task/task-form/task-form.component';
import { TaskListComponent } from './component/task/task-list/task-list.component';
import { TaskDetailsComponent } from './component/task/task-details/task-details.component';
import { TaskItemComponent } from './component/task/task-list/task-item/task-item.component';
import { LoginComponent } from './component/login/login.component';
import { DataTablesModule } from "angular-datatables";
import { RegisterComponent } from './component/register/register.component';
import { SubTaskFromComponent } from './component/task/task-details/sub-task-from/sub-task-from.component';
import { SubTaskListComponent } from './component/task/task-details/sub-task-list/sub-task-list.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { Select2Module } from 'ng2-select2';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskItemComponent,
    LoginComponent,
    RegisterComponent,
    SubTaskFromComponent,
    SubTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Select2Module,
    DataTablesModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
