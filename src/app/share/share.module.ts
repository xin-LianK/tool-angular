import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsComponent } from './tips/tips.component';
import { LoadingComponent } from './loading/loading.component';

import { TipsService } from './tips';
import { LoadingService } from './loading'
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    TipsComponent,
    LoadingComponent,
    SpinnerComponent,
    NotFoundComponent
],
  exports: [
    TipsComponent,
    LoadingComponent,
    SpinnerComponent,
    MaterialModule
  ],
  providers: [
    TipsService,
    LoadingService,
    SpinnerService
  ]
})
export class ShareModule { }