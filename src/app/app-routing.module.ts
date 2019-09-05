import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { shoppingCartComponent } from './components/shoppingCart/shoppingCart.component';

const routes: Routes = [
  // {path: 'shoppingCart', component: shoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
