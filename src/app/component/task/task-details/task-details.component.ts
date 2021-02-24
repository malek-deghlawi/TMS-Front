import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;
  constructor(private router: ActivatedRoute, private ts: TaskService, private msg: MessageService) { }
  isChecked: boolean;
  t_id: any;
  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      this.t_id = data.id;
      this.getAllTasks(this.t_id);

    });
    this.msg.getMessage().subscribe((data) => {
      if (this.t_id != undefined)
        this.getAllTasks(this.t_id);
    });
  }
  getAllTasks(id: any) {
    this.ts.Show(id).subscribe((t) => {
      this.task = t;
      this.isChecked = this.task.end_falg;

    })
  }
  fieldsChange(values: any): void {
    this.ts.UpdateFlag(this.task.id, values.currentTarget.checked).subscribe((t) => {
      this.task = t;
      this.isChecked = this.task.end_falg;

    });

  }

}
