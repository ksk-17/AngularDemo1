import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionDataService {

  constructor() { }

  private televisions:Product[]=[{
    title:"Sony X8000H",
    img:"https://static.digit.in/product/thumb_168007_product_td_300.jpeg",
    price:"57,522"
  },{
    title:"LG 43UM7780PTA",
    img:"https://static.digit.in/product/thumb_157712_product_td_300.jpeg",
    price:"42,275"
  },{
    title:"Samsung Serif",
    img:"https://static.digit.in/product/thumb_168008_product_td_300.jpeg",
    price:"63999"
  },{
    title:"Hisense 43A71F",
    img:"https://static.digit.in/product/thumb_175551_product_td_300.jpeg",
    price:"29,990"
  },{
    title:"Onida Full HD TV",
    img:"https://static.digit.in/product/thumb_152029_product_td_300.jpeg",
    price:"21,499"
  },{
    title:"Mi TV 4A Pro",
    img:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1558081097.74988216.jpg",
    price:"24,999"
  }]

  getTelevisionsDetails(){
    return this.televisions;
  }
}
