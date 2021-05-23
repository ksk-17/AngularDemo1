import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private hc:HttpClient) { }
  getUsers():Observable<User[]>{
    return this.hc.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getData():Observable<any[]>{
    return this.hc.get<any[]>('https://reqres.in/api/unknown');
  }
}
