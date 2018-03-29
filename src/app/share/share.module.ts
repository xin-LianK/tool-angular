import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsComponent } from './tips/tips.component';
import { LoadingComponent } from './loading/loading.component';

import { TipsService } from './tips';
import { LoadingService } from './loading'
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner';
import { NotFoundComponent } from './not-found/not-found.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogsService } from './dialogs/dialogs.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
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
  ],
  providers: [
    TipsService,
    LoadingService,
    SpinnerService,
    DialogsService
  ]
})
export class ShareModule { }