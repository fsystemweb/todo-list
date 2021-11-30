import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericResponse, Task } from '../models';

@Injectable({ providedIn: 'root' })
export class ApiRestTaskService {
  constructor(private http: HttpClient) {}

  public createTask(task: Task): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(`${environment.api}task/`, task);
  }

  public update(task: Task): Observable<GenericResponse> {
    return this.http.put<GenericResponse>(`${environment.api}task/`, task);
  }

  public delete(task: Task): Observable<GenericResponse> {
    return this.http.delete<GenericResponse>(
      `${environment.api}task/${task._id}`
    );
  }

  public getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.api}task/`);
  }
}
