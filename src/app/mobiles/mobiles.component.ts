import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { MobileDataService } from '../mobile-data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  constructor(private mbObj:MobileDataService){

  }

  mobiles:Product[]=[];

  ngOnInit(){
     this.mobiles=this.mbObj.getMobilesData();
  }

  productsSelected=[]
  SelectProducts(title){
    this.productsSelected.push(title);
  }

}
