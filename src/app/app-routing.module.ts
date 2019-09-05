import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
// import { shoppingCartComponent } from './components/shoppingCart/shoppingCart.component';

const routes: Routes = [
    { path: '', component: MainComponent },
  // {path: 'shoppingCart', component: shoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
