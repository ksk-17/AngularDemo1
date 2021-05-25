import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ds:ApiDataService,private router:Router) { }

  Users=[]

  ngOnInit(): void {
    this.ds.getUsers().subscribe(
      userdata=>{
        this.Users=userdata;
      },
      err=>{
        console.log("err is",err);
      }
    )
  }
  Onselect(id){
    this.router.navigateByUrl('user/'+id)
  }

}
