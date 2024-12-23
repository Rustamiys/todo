import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';

export interface Task {
  id: number;
  priority: string;
  task: string;
  startDate: Date;
  endDate: Date;
  status: string;
  participants: Participant[];
}

export interface Participant{
  id: number;
  name: string;
}
const priorities = [
  { id: 1, value: 'Низкий' },
  { id: 2, value: 'Средний' },
  { id: 3, value: 'Высокий' },
];

const status = [
  { id: 1, value: 'В процессе' },
  { id: 2, value: 'Завершено' },
  { id: 3, value: 'Отменено' },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api'; // базовый URL API

  constructor(private http : HttpClient){
  }
  tasks : Task[] = [];
  participants : Participant[] = [];

  getAllTask(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/task`).pipe(
      tap((tasks) => {
        this.tasks = tasks;
      }),
      catchError((error) => {
        console.error('Failed to fetch tasks:', error);
        return of([]);
      })
    );
  }

  getTaskByID(id: number): Observable<Task>  {
    return this.http.get<Task>(`${this.apiUrl}/task/${id}`);    
  }

  addTask(task: Task): void {  
    this.http.post(`${this.apiUrl}/task`, task).subscribe({
      next: (response) => {
        console.log('Task added successfully:', response);
        this.tasks.push(task);
      },
      error: (err) => {
        console.error('Failed to add task:', err);
      }
    });
  }
  

  updateTask(task: Task): void {
    this.http.put(`${this.apiUrl}/task/${task.id}`, task).subscribe({
      next: () => {
        console.log(`Task with ID ${task.id} updated successfully.`);
      },
      error: (err) => {
        console.error(`Error updating task with ID ${task.id}:`, err);
      }
    });
  }
  

  deleteTask(id : number): void{
    this.http.delete(`${this.apiUrl}/task/${id}`).subscribe({
      next: () => {
        console.log(`Task with ID ${id} deleted successfully.`);
      },
      error: (err) => {
        console.error(`Error deleting task with ID ${id}:`, err);
      }
    });
  }

  getAllParticipants(): Observable<Participant[]>{
    return this.http.get<Participant[]>(`${this.apiUrl}/participants`).pipe(
      tap((participant) => {
        this.participants = participant;
      }),
      catchError((error) => {
        console.error('Failed to fetch participants:', error);
        return of([]);
      })
    );
  }

  addParticipant(participant: Participant): void{
    console.log(participant);
    this.http.post(`${this.apiUrl}/participants`, participant).subscribe({
      next: (response) => {
        console.log('Participant added successfully:', response);
        this.participants.push(participant);
      },
      error: (err) => {
        console.error('Failed to add participant:', err);
      }
    });
  }

  deleteParticipant(id: number): void{
    this.http.delete(`${this.apiUrl}/participants/${id}`).subscribe({
      next: () => {
        console.log(`Participants with ID ${id} deleted successfully.`);
      },
      error: (err) => {
        console.error(`Error deleting participant with ID ${id}:`, err);
      }
    });
  }
}
