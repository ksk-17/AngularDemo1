import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent{

  products:Product[]=[{
    title:"BMW HP4 Race",
    img:"https://blog.talkcharge.com/wp-content/uploads/2020/03/bmw-hp4-race.jpg",
    price:"86,70,000"
  },{
    title:"Kawasaki Ninja H2R",
    img:"https://blog.talkcharge.com/wp-content/uploads/2020/03/kawasaki-ninja-h2r.jpg",
    price:"72,00,000"
  },{
    title:"Ducati Panigale V4 R",
    img:"https://blog.talkcharge.com/wp-content/uploads/2020/03/Ducati-Panigale-V4-R.jpg",
    price:"51,87,000"
  },{
    title:"MV Agusta F4 RC",
    img:"https://blog.talkcharge.com/wp-content/uploads/2020/03/mv-agusta-f4-rc.jpg",
    price:"50,10,000"
  },{
    title:"Indian Roadmaster",
    img:"https://blog.talkcharge.com/wp-content/uploads/2020/03/indian-roadmaster.jpg",
    price:"46,46,000"
  },{
    title:"Norton Commando 961",
    img:"https://blog.talkcharge.com/wp-content/uploads/2020/03/Norton-Commando-961.jpg",
    price:"23,00,000"
  }]

  productsSelected=[]
  SelectProducts(title){
    this.productsSelected.push(title);
  }
}
