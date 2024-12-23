import { FormsModule }   from "@angular/forms";
import { DxDataGridModule, DxButtonModule, DxSelectBoxModule, DxPopupModule, DxDateBoxModule } from 'devextreme-angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"; 
import { Router } from '@angular/router';
import { DxTextBoxModule } from 'devextreme-angular';
import { ActivatedRoute } from '@angular/router';
import { DataService, Participant, Task } from './../data.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-showcard',
  standalone: true,
  imports: [CommonModule, DxButtonModule, DxDataGridModule, FormsModule, DxSelectBoxModule, DxDateBoxModule,
    DxTextBoxModule, DxPopupModule, NotFoundComponent
  ],
  providers: [DataService],
  templateUrl: './index.showcard.html',
  styleUrls: ['./style.showcard.css']
})


export class ShowcardComponent implements OnInit{
  task: Task = {
    id: 0,
    priority: '',
    task: '',
    startDate: new Date(),
    endDate: new Date(),
    status: '',
    participants: []
  };
  priorities = ['Высокий', 'Средний', 'Низкий'];
  statuses = ['В процессе', 'Выполнено', 'Отложено'];
  allParticipants: Participant[] = [];
  task_id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ds: DataService
  ) { 
    this.ds.getAllParticipants().subscribe((participant) => {
      this.allParticipants = participant;
    });
  }

  ngOnInit(): void{
    if (typeof localStorage !== 'undefined') {
      if (!localStorage.getItem('token')){
        this.router.navigate(['/auth']);
      }
    }
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.task_id = +id;
      } else {
        console.error('Task ID is null');
      }
    });
    if (this.task_id!=0){
      this.ds.getTaskByID(this.task_id).subscribe({
        next: (data) => {
          console.log(data);
          this.task = data;
        }
      });
    }
  }
}

