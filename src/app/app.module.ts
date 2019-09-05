import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { ListItemComponent } from './components/main/list-item/list-item.component';
import { ItemCardComponent } from './components/main/item-card/item-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import {MatSliderModule} from '@angular/material/slider';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';

// Import what you need. RECOMMENDED. ✔️
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListItemComponent,
    ItemCardComponent,
    FiltersComponent,
    SidebarComponent,
    HeaderComponent
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
    NzSliderModule,
    MatSliderModule
  ],
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons }, { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
