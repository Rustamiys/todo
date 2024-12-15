import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Task } from './../data.service';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DxDataGridModule, DxButtonModule],
  // providers: [DataService],
  templateUrl: './index.home.html',
  styleUrls: ['./style.home.css']
})


export class HomeComponent {
  constructor(
    private router: Router,
    // private dataService: DataService
  ) { }

  async goToEditCardPage() {
    await this.router.navigate(['/editcard'])
  }
  deleteTask(id: number) {
  }

  updateTask(id: number) {

  }

  taskUpdate(event: any): void {
    console.log(event);
    const updatedTaskId = event.key;
    alert('Row Updated: Task ID =' + updatedTaskId);
  }
  taskRemove(event: any): void {
    console.log(event);
    const removeTaskId = event.data.id;
    alert('Row Remove: Task ID =' + removeTaskId);
  }

  tasks = [
    {
      id: 1,
      priority: 'Высокий',
      task: 'Купить Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И., Сергеев К.А.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    },
    {
      id: 2,
      priority: 'Средний',
      task: 'Поцеловать Пингвина',
      startDate: '12.02.2021',
      endDate: '15.02.2021',
      status: 'Выполнена',
      participants: 'Петров П.И.'
    }
  ];

  // Дополнительные параметры для таблицы
  columns = [
    { dataField: 'id', caption: '№' },
    { dataField: 'priority', caption: 'Приоритет' },
    { dataField: 'task', caption: 'Задача' },
    { dataField: 'startDate', caption: 'Дата начала' },
    { dataField: 'endDate', caption: 'Дата завершения' },
    { dataField: 'status', caption: 'Статус' },
    { dataField: 'participants', caption: 'Участники' }
  ];

  taskArr: Task[] = [];
  newTask : Task = new Task();
//   constructor(private dataService: DataService){}
  stat : Boolean = true;
//   ngOnInit() : void{
//       this.newTask = new Task();
//       this.taskArr = [];
//       this.getAllTasks();
//   }

//   addTask(task: Task){
//       this.dataService.addTask(task).subscribe(res => {
//           this.ngOnInit();
//           this.stat = true;
//       }, err => {
//           this.stat = false;
//       });
//   }

//   getAllTasks() {
//       this.dataService.getAllTask().subscribe(res =>{
//           this.taskArr = res;
//           this.stat = true;
//       }, err => {
//           this.stat = false;
//       });
//   }
  
//   getTaskById(id : number){
//       this.dataService.getTaskByID(id).subscribe(res =>{
//           this.newTask = res;
//           this.stat = true;
//       }, err => {
//           this.stat = false;
//       });
//   }

//   deleteTaskById(id : number){
//       this.dataService.deleteTask(id)
//       .subscribe(res => {
//           this.stat = true;
//       }, err => {
//           this.stat = false;
//       });
//   }

//   updateTask(task : Task){
//       this.dataService.updateTask(task).subscribe(res =>{
//           this.stat = true;
//       }, err => {
//           this.stat = false;
//       })
//   }
}
