import { Injectable } from '@angular/core';
import {Task} from '../Tasks';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://my-json-server.typicode.com/sahu-gaurav0/TaskTracker/tasks';

  getTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task : Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task : Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions)

  }

  constructor(private http : HttpClient) { }
}
