import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { SubTask } from 'src/app/SubTask';

@Component({
  selector: 'app-sub-task-list',
  templateUrl: './sub-task-list.component.html',
  styleUrls: ['./sub-task-list.component.css']
})
export class SubTaskListComponent implements OnInit {
  @Input()sub_task:SubTask[];
  constructor(private msg:MessageService) { }

  ngOnInit(): void {

  }

}
