import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Users:User[]=[];

  Data=[];

  constructor(private apiObj:ApiDataService,private fakeapi:ApiDataService) { }

  ngOnInit(): void {

    this.apiObj.getUsers().subscribe(userdata=>{
      this.Users=userdata;
    },err=>{
      console.log("err is",err);
    })

    this.fakeapi.getData().subscribe(fakedata=>{
      this.Data=fakedata;
      console.log(this.Data);
    },err=>{
      console.log("err is",err);
    })
  }

}
