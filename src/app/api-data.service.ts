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
    return this.hc.get<User[]>('http://localhost:3000/mobiles');
  }

}
