import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { BikeDataService } from '../bike-data.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit{

  constructor(private biObj:BikeDataService){}

  bikes:Product[]=[];

  ngOnInit(){
    this.bikes=this.biObj.getBikesData();
  }

  productsSelected=[]
  SelectProducts(title){
    this.productsSelected.push(title);
  }
}
