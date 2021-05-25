import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private hc:HttpClient) { }
  getUsersById(id):Observable<User>{
    return this.hc.get<User>('http://localhost:3000/mobiles/'+id);
  }

}
