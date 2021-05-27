import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
/*
En app.modules tenemos 
import { MatTableModule} from '@angular/material/table';
*/

export interface Tasks {
  _id: string, 
  name: string, 
  description: string, 
  date: string
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns2: string[] = ['_id','name', 'description', 'date'];
  dataSource = new Array<Tasks>()

  tasks = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
          this.dataSource = res;
        },
        err => console.log(err)
      )
  }

}
