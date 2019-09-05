import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { ListItemComponent } from './components/main/list-item/list-item.component';
import { ItemCardComponent } from './components/main/item-card/item-card.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemCardComponent } from './components/shopping-cart/cart-item-card/cart-item-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatSliderModule} from '@angular/material/slider';


// Import what you need. RECOMMENDED. ✔️
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemComponent,
    ItemCardComponent,
    HeaderComponent,
    SidebarComponent,
    ShoppingCartComponent,
    CartItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
