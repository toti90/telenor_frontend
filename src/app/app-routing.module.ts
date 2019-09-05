import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/main/details/details.component';

// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: '', component: MainComponent},
  {path: 'detail', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
