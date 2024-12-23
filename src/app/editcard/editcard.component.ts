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
  selector: 'app-editcard',
  standalone: true,
  imports: [CommonModule, DxButtonModule, DxDataGridModule, FormsModule, DxSelectBoxModule, DxDateBoxModule,
    DxTextBoxModule, DxPopupModule, NotFoundComponent
  ],
  providers: [DataService],
  templateUrl: './index.editcard.html',
  styleUrls: ['./style.editcard.css']
})


export class EditcardComponent implements OnInit{
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
    this.getAllParticipants();
    if (this.task_id!=0){
      this.ds.getTaskByID(this.task_id).subscribe({
        next: (data) => {
          console.log(data);
          this.task = data;
        }
      });
    }
  }

  getAllParticipants(){
    this.ds.getAllParticipants().subscribe((participant) => {
      this.allParticipants = participant;
    });
  }
  
  save() {
    if (!this.task.startDate){
      alert('Ошибка: Вы не ввели поле "Дата начала".');
    } else if (!this.task.endDate){
      alert('Ошибка: Вы не ввели поле "Дата завершения".');
    }
    else if (this.task.startDate > this.task.endDate) {
      alert('Ошибка: Дата начала не может быть позже даты завершения.');
    } 
    else if (!this.task.task){
      alert('Ошибка: Вы не ввели поле "Задача".');
    }
    else if (!this.task.priority){
      alert('Ошибка: Вы не ввели поле "Приоритет".');
    }
    else if (!this.task.status){
      alert('Ошибка: Вы не ввели поле "Статус".');
    }
    else if (!this.task.participants){
      alert('Ошибка: Вы не ввели поле "Участники".');
    }
    else {
      if (this.task.id==0){
        this.ds.addTask(this.task);
        this.router.navigate([`/home`]);
      }
      else {
        this.ds.updateTask(this.task);
      }
    }
  }
  
  cancel(){
    if (this.task_id==0){
      this.task = {
          id: 0,
          priority: '',
          task: '',
          startDate: new Date(),
          endDate: new Date(),
          status: '',
          participants: []
      }
    }
    else {
      this.ds.getTaskByID(this.task_id).subscribe({
        next: (data) => {
          this.task = data;
        }
      });
    }
  }

  isPopupVisible = false;
  isCreateParticipantPopupVisible = false; 
  searchTerm = ''; 
  filteredParticipants = [...this.allParticipants];
  newParticipantName = '';

  openPopup() {
    this.isPopupVisible = true;
    this.searchTerm = '';
    this.filteredParticipants = [...this.allParticipants];
  }

  filterParticipants(event: any) {
    const term = event.value ? event.value.toLowerCase() : '';
    this.filteredParticipants = this.allParticipants.filter(p =>
      p.name.toLowerCase().includes(term)
    );
  }

  addParticipant(participant: any) {
    if (!this.task.participants.some(p => p.id === participant.id)) {
      this.task.participants.push(participant);
    }
  }
  
  deleteParticipant(id: number){
    this.ds.deleteParticipant(id);  
  }

  openCreateParticipantPopup() {
    this.isCreateParticipantPopupVisible = true;
    this.isPopupVisible = false;
    this.newParticipantName = '';
  }

  createParticipant() {
    if (this.newParticipantName.trim()) {
      const newParticipant = {
        id: 0 
        ? Math.max(...this.allParticipants.map(p => p.id)) + 1 : 1,
        name: this.newParticipantName
      };
      console.log(newParticipant)
      this.ds.addParticipant(newParticipant);
      this.isCreateParticipantPopupVisible = false;
      this.openPopup();
    }
  }
}
