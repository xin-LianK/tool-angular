import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { HomeRoutes } from './home.routing';
import { MaterialModule } from '../share/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    MaterialModule,
    NgbModule
  ],
  declarations: [HomeComponent,
    IndexComponent
  ]
})
export class HomeModule { }