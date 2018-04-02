import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsComponent } from './tips/tips.component';
import { LoadingComponent } from './loading/loading.component';

import { TipsService } from './tips';
import { LoadingService } from './loading'
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessageComponent, ConfirmComponent, SnackBarComponent } from './dialogs'

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogsService } from './dialogs/dialogs.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    NgbModule
  ],
  declarations: [
    TipsComponent,
    LoadingComponent,
    SpinnerComponent,
    NotFoundComponent,
    MessageComponent,
    ConfirmComponent,
    SnackBarComponent
    ,
    AlertComponent
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
    DialogsService,
    AlertService
  ],
  entryComponents: [
    MessageComponent,
    ConfirmComponent,
    TipsComponent,
    SnackBarComponent,
    AlertComponent
  ]
})
export class ShareModule { }