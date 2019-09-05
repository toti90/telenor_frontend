import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MainComponent } from './components/main/main.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { SliderComponent } from './components/main/filters/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FiltersComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
