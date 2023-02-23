import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public productCartService: ProductCartService){

  }
}
