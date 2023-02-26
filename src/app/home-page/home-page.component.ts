import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Product } from '../classes/Product';
import { ProductCartService } from '../services/product-cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private productCartService: ProductCartService){

  }
  products:Product[]=[];
  getProducts():void{
    this.productService.getProducts().subscribe(products=>this.products=products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  addToCart(product:Product):void{
    this.productCartService.addToCart(product);
  }
}
