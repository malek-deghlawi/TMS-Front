import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { SubtaskService } from 'src/app/service/subtask.service';

@Component({
  selector: 'app-sub-task-from',
  templateUrl: './sub-task-from.component.html',
  styleUrls: ['./sub-task-from.component.css']
})
export class SubTaskFromComponent implements OnInit {

  constructor( private sbs:SubtaskService,private msg:MessageService) { }
  title:string='';
  @Input() task_id:string;
  formSubmitted : boolean = false;
  ngOnInit(): void {
  }
  Add(e:any)
  {
    this.formSubmitted=true;

    e.preventDefault();
    this.sbs.addSubTask(this.title,this.task_id).subscribe((data)=>{
      this.title='';
      this.formSubmitted=false;
      this.msg.setMessage("something happen");
    });
  }

}
