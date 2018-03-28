import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsComponent } from './tips/tips.component';
import { TipsService } from './tips';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TipsComponent
  ],
  exports: [
    TipsComponent
  ],
  providers:[
    TipsService
  ]
})
export class ShareModule { }