import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { HomeRoutes } from './home.routing';
import { MaterialModule } from '../share/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    MaterialModule
  ],
  declarations: [HomeComponent,
    IndexComponent
  ]
})
export class HomeModule { }