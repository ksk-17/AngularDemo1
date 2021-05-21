import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  Users=[];
  userObj:User={username:" ",dob:" ",email:" ",gender:" "};

  addData(ref){
    this.userObj=ref.value;
    console.log(this.userObj)
    this.Users.push(this.userObj)
    ref.reset()
  }

}
