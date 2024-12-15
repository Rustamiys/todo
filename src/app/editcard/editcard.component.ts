import { FormsModule }   from "@angular/forms";
import { DxDataGridModule, DxButtonModule, DxSelectBoxModule, DxPopupModule, DxDateBoxModule } from 'devextreme-angular';
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"; 
import { Router } from '@angular/router';
import { DxTextBoxModule } from 'devextreme-angular';
// import { DataService } from "../data.service";

@Component({
  selector: 'app-editcard',
  standalone: true,
  imports: [CommonModule, DxButtonModule, DxDataGridModule, FormsModule, DxSelectBoxModule, DxDateBoxModule,
    DxTextBoxModule, DxPopupModule
  ],
  templateUrl: './index.editcard.html',
  styleUrls: ['./style.editcard.css']
})



export class EditcardComponent {
  constructor(
    private router: Router,
    // private dataService: DataService
  ) { }
  priorities = ['Высокий', 'Средний', 'Низкий'];
  statuses = ['В процессе', 'Выполнено', 'Отложено'];
  participants = [
    { id: 1, name: 'Иванов А.С.' },
    { id: 2, name: 'Петров А.И.' },
    { id: 3, name: 'Сидоров В.В.' },
  ];
  allParticipants = [ // Все возможные участники для поиска
    { id: 1, name: 'Иванов А.С.' },
    { id: 2, name: 'Петров А.И.' },
    { id: 3, name: 'Сидоров В.В.' },
    { id: 4, name: 'Кузнецов Н.Г.' },
    { id: 5, name: 'Алексеев М.И.' }
  ];
  selectedPriority: string = '';
  selectedStatus: string = '';
  taskName: string = '';
  startDate: Date = new Date('');
  endDate: Date = new Date('');
  start_date: Date = new Date();
  finish_date: Date = new Date();
  lofff(even:any):void{
    alert("sdddddddddddddddddd");
  }
  ngOnInit(): void{

  }
  async goToHomePage() {
    await this.router.navigate(['/home'])
  }
  
  save() {
    if (!this.start_date || !this.finish_date || this.start_date > this.finish_date) {
      alert('Ошибка: Дата начала не может быть позже даты завершения.');
    } 
    else if (!this.taskName){
      alert('Ошибка: Вы не ввели поле "Задача".');
    }
    else if (!this.selectedPriority){
      alert('Ошибка: Вы не ввели поле "Приоритет".');
    }
    else if (!this.selectedStatus){
      alert('Ошибка: Вы не ввели поле "Статус".');
    }
    else if (!this.taskName){
      alert('Ошибка: Вы не ввели поле "Задача".');
    }
    else {
      alert(this.start_date);
      alert(this.finish_date);
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
    if (!this.participants.some(p => p.id === participant.id)) {
      this.participants.push(participant);
    }
    this.isPopupVisible = false;
  }

  openCreateParticipantPopup() {
    this.isCreateParticipantPopupVisible = true;
    this.newParticipantName = '';
  }

  createParticipant() {
    if (this.newParticipantName.trim()) {
      const newParticipant = {
        id: this.allParticipants.length + 1,
        name: this.newParticipantName
      };
      this.allParticipants.push(newParticipant);
      this.participants.push(newParticipant);
      this.isCreateParticipantPopupVisible = false;
      this.isPopupVisible = false;
    }
  }
}
