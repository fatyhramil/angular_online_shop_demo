import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { PRODUCTS } from '../mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts():Observable<Product[]>{
    const products = of(PRODUCTS);
    return products;
  }
}
