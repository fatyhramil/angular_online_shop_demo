import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../services/product-cart.service';
import { Product } from '../classes/Product';
import { CartProduct } from '../classes/CartProduct';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private productCartService: ProductCartService) { }
  totalPrice: number = 0;
  cartProducts:CartProduct[]=[];
  
  ngOnInit(): void {
    // this.totalPrice = this.productCartService.cartProducts.
    //   map(a => a.price).
    //   reduce(function (a, b) {
    //     return a + b;
    //   });
    this.cartProducts=this.productCartService.cartProducts;
    this.totalPrice=this.productCartService.totalPrice;
  }
  
}
