import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  constructor() { }
  cartProducts:Product[]=[];
  itemsInCart:number=0;
  addToCart(product:Product):void{
    this.itemsInCart++;
    this.cartProducts.push(product);
    console.log(this.cartProducts);
  }
}
