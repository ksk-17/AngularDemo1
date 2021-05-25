import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.model';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private ds:ActivatedRoute,private as:DataserviceService) { }

  user:User;

  ngOnInit(): void {
    let id=this.ds.snapshot.params.id;
    this.as.getUsersById(id).subscribe(
      userdata=>{
        this.user=userdata;
      },
      err=>{
        console.log("err is",err);
      }
    )
  }

}
