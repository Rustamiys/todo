import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

export class User {
  constructor(
    public login: string,
    public name: string,
    public surename: string,
    public password?: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class UserService{
  private apiUrl = 'http://localhost:8080/api/users'; // базовый URL API

  constructor(private http: HttpClient) {
    
  }

  register(user: User) {
    const url = `${this.apiUrl}/register`; 
    return this.http.post<any>(url, user).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  login(login: string, password: string) {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, { login, password }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
