import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ListItemComponent } from './components/main/list-item/list-item.component';
import { ItemCardComponent } from './components/main/item-card/item-card.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { DetailsComponent } from './components/main/details/details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FiltersComponent } from './components/main/filters/filters.component';
import { ConvertPricePipe } from './pipes/convert-price.pipe';
import { ConfirmPurchaseComponent } from './components/shopping-cart/confirm-purchase/confirm-purchase.component';

registerLocaleData(en);

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemComponent,
    ItemCardComponent,
    DetailsComponent,
    HeaderComponent,
    FiltersComponent,
    SidebarComponent,
    ShoppingCartComponent,
    ConvertPricePipe,
    ConfirmPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NzButtonModule,
    NzIconModule,
    NzTreeModule,
    NzPaginationModule
  ],
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons }, { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
