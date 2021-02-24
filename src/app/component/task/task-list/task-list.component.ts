import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import 'datatables.net';
import { Task } from 'src/app/Task';
import { Subject } from 'rxjs';
import { TaskService } from '../../../service/task.service'
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router, private ts: TaskService) { }

  ngOnInit(): void {
    this.getTask();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  getTask() {
    this.ts.getTask().subscribe((data) => {
      this.tasks = data;
      this.dtTrigger.next();

    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event

    this.dtTrigger.unsubscribe();
  }
  onClickD(event:any) {
    var target = event.target;


    var idAttr = target.attributes.id.value;

  }

}
