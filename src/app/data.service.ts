import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Task {
  id : number = 0;
  priority : number = 1;
  value : string = '';
  date_start : Date = new Date();
  date_finish : Date = new Date();
  status : number = 1;
  employes : string[] = [''];
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

  constructor(private http : HttpClient){}

  serviceDb : string = "assets/db.json";

  getAllTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.serviceDb);
  }

  getTaskByID(id: number){
    return this.http.get<Task>(this.serviceDb, {
        params: new HttpParams().set('id', id)
    });
  }

  addTask(task : Task){
    return this.http.post(this.serviceDb, {task});
  }

  updateTask(task : Task){
    return this.http.put(this.serviceDb, {task});
  }

  deleteTask(_id : number){
    return this.http.delete(this.serviceDb, {params: new HttpParams().set('id', _id)});
  }

}
