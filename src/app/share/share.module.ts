import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsComponent } from './tips/tips.component';
import { LoadingComponent } from './loading/loading.component';

import { TipsService } from './tips';
import { LoadingService } from './loading'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TipsComponent,
    LoadingComponent
  ],
  exports: [
    TipsComponent,
    LoadingComponent
  ],
  providers: [
    TipsService,
    LoadingService
  ]
})
export class ShareModule { }