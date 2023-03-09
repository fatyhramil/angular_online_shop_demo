import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { CartProduct } from '../classes/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  constructor() { }
  cartProducts: CartProduct[] = [];
  totalPrice: number = 0;
  itemsInCart: number = 0;
  addToCart(newProduct: Product): void {
    let cartProduct = new CartProduct();
    cartProduct.product = newProduct;
    let found: boolean = false;
    //search for existing product
    this.cartProducts = this.cartProducts.map(cp => {
      if (cp.product?.id == newProduct?.id) {
        cp.quantity++;
        found = true;
      }
      return cp;
    });
    if (!found) {
      this.cartProducts.push(cartProduct);
    }
    this.totalPrice += newProduct.price;
    this.itemsInCart++;
  }
}
