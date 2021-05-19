import { Component,EventEmitter,Input,Output} from '@angular/core';
import { Product } from '../models/usermodel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{

  @Input() ProductObj:Product;

  @Output() myEvent= new EventEmitter;

  sendProductDetailsToParent(ProductTitle){
    this.myEvent.emit(ProductTitle);
  }
}
