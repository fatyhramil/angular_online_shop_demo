import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./components/home-page/home-page.module').then(m =>
      m.HomePageModule)
  },
  {
    path: 'shoppingcart',
    loadChildren:()=>import('./components/shopping-cart/shopping-cart.module').then(m=>
      m.ShoppingCartModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
