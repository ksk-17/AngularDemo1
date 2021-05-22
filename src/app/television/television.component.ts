import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';
import { TelevisionDataService } from '../television-data.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit{

  televisions:Product[]=[];

  constructor(private teObj:TelevisionDataService){}

  ngOnInit(){
    this.televisions=this.teObj.getTelevisionsDetails();
  }

  productsSelected=[]
  SelectProducts(title){
    this.productsSelected.push(title);
  }

}
