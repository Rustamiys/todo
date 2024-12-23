import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Task } from './../data.service';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; 
import { ActivatedRoute } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NotFoundComponent, CommonModule, DxDataGridModule, DxButtonModule, MatCardModule],
  providers: [DataService],
  templateUrl: './index.home.html',
  styleUrls: ['./style.home.css']
})


export class HomeComponent implements OnInit{
  selectedTask: Task = {
    id: 0,
    priority: '',
    task: '',
    startDate: new Date(),
    endDate: new Date(),
    status: '',
    participants: []
  };

  isCardVisible: boolean = false;
  
  tasks: Task[] = [];
  cardPosition: { top: string; left: string } = { top: '0px', left: '0px' };
  dataSource: DataSource | null = null;

  constructor(
    private router: Router,
    private ds: DataService,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      if (!localStorage.getItem('token')){
        this.router.navigate(['/auth']);
      }
    }
    this.ds.getAllTask().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    
      this.route.queryParams.subscribe(params => {
        const filterStatus = params['status'];
        console.log(filterStatus)
        this.dataSource = new DataSource({
          store: this.tasks,
          filter: filterStatus ? ['status', '=', filterStatus] : null
        });
      });
    });
    
  }
  deleteTask(id: number) {
    this.ds.deleteTask(id);
  }

  taskShowCard(): void{
    const updatedTaskId = this.selectedTask.id;
    this.router.navigate(['/task'], { queryParams: { id: updatedTaskId } });
  }

  taskInfo(event: any): void {
    const rect = event.cellElement.getBoundingClientRect();    
    if (rect.x<50){
      this.selectedTask = event.row.data;
      this.isCardVisible = !this.isCardVisible;
      this.cardPosition = {
        top: `${rect.top + window.scrollY - 100}px`,
        left: `${300+rect.left + window.scrollX}px` 
      };
    }
  }

  taskUpdate(event: any): void {
    const updatedTaskId = event.key.id;
    this.router.navigate(['/editcard'], { queryParams: { id: updatedTaskId } });
  }

  taskRemove(event: any): void {
    console.log(event);
    const removeTaskId = event.data.id;
    this.deleteTask(removeTaskId);
  }

  getParticipantsNames(rowData: any): string {
    return rowData.participants
      .map((participant: any) => participant.name)
      .join(', ');
  }

  formatParticipants = (data: any): string => {
    if (!data.participants || !Array.isArray(data.participants)) {
      return 'Нет участников';
    }
    return data.participants.map((p: any) => p.name).join(', ');
  };
}
