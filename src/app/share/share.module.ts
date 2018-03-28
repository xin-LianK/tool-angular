import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsComponent } from './tips/tips.component';
import { LoadingComponent } from './loading/loading.component';

import { TipsService } from './tips';
import { LoadingService } from './loading'
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TipsComponent,
    LoadingComponent,
    SpinnerComponent
  ],
  exports: [
    TipsComponent,
    LoadingComponent,
    SpinnerComponent
  ],
  providers: [
    TipsService,
    LoadingService,
    SpinnerService
  ]
})
export class ShareModule { }