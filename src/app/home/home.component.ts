import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Task } from './../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  // providers: [DataService],
  templateUrl: './index.home.html',
  styleUrls: ['./style.home.css']
})


export class HomeComponent {
  taskArr: Task[] = [];
  newTask : Task = new Task();
  constructor(private dataService: DataService){}
  stat : Boolean = true;
  ngOnInit() : void{
      this.newTask = new Task();
      this.taskArr = [];
      this.getAllTasks();
  }

  addTask(task: Task){
      this.dataService.addTask(task).subscribe(res => {
          this.ngOnInit();
          this.stat = true;
      }, err => {
          this.stat = false;
      });
  }

  getAllTasks() {
      this.dataService.getAllTask().subscribe(res =>{
          this.taskArr = res;
          this.stat = true;
      }, err => {
          this.stat = false;
      });
  }
  
  getTaskById(id : number){
      this.dataService.getTaskByID(id).subscribe(res =>{
          this.newTask = res;
          this.stat = true;
      }, err => {
          this.stat = false;
      });
  }

  deleteTaskById(id : number){
      this.dataService.deleteTask(id)
      .subscribe(res => {
          this.stat = true;
      }, err => {
          this.stat = false;
      });
  }

  updateTask(task : Task){
      this.dataService.updateTask(task).subscribe(res =>{
          this.stat = true;
      }, err => {
          this.stat = false;
      })
  }
}
