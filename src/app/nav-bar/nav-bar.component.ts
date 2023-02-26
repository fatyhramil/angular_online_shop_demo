import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../services/product-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(public productCartService: ProductCartService){

  }
  itemsInCart:number=0;
  ngOnInit(): void {
    this.itemsInCart=this.productCartService.cartProducts.length;
  }
}
