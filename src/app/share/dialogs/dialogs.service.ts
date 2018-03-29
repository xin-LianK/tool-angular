import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MessageComponent } from './message/message.component';
import { ConfirmComponent } from './confirm/confirm.component';
@Injectable()
export class DialogsService {
    constructor(
        private dialog: MatDialog,
        private snackbar: MatSnackBar
    ) { }

    message(content: string, title: string = '提示', width: string): Promise<any> {
        const dlgRef = this.dialog.open(MessageComponent, {
            width: width,
        });
        dlgRef.componentInstance.content = content;
        dlgRef.componentInstance.title = title;
        return dlgRef.afterClosed().toPromise();
    }
    confirm(content: string, title: string = '提示'): Promise<boolean> {
        const dlgRef = this.dialog.open(ConfirmComponent);
        dlgRef.componentInstance.content = content;
        dlgRef.componentInstance.title = title;
        return dlgRef.afterClosed().toPromise().then((rs) => rs === 'ok', rj => false);
    }
    bar(content: string, duration: number = 2000) {
        const snackRef = this.snackbar.openFromComponent(SnackBarComponent, {
            duration: duration,
            verticalPosition: 'top'
        })
        snackRef.instance.content = content;
    }
}