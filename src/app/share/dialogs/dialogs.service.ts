import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SnackBarComponent } from './snack-bar/snack-bar.component';


@Injectable()
export class DialogsService {

    constructor(
        private dialog: MatDialog,
        private snackbar: MatSnackBar
    ) { }

    bar(content:string,duration:number = 2000){
        const snackRef = this.snackbar.openFromComponent(SnackBarComponent,{
            duration:duration,
            verticalPosition:'top'
        })
        snackRef.instance.content = content;
    }
}