import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MessageComponent } from './message/message.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatSnackBar } from '@angular/material';
import { ProcessingComponent } from './Processing/Processing.component';
@Injectable()
export class DialogsService {
    constructor(
        private dialog: MatDialog,
        // private snackbar: MatSnackBar
        public snackBar: MatSnackBar
    ) { }

    message(content: string, title: string = '提示'): Promise<any> {
        const dlgRef = this.dialog.open(MessageComponent);
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
    bar(content: string, time: number) {
        const snackRef = this.snackBar.openFromComponent(SnackBarComponent, {
            duration: time
        })
        snackRef.instance.content = content;
    }
    setInProgress(content?: string): () => void {
        const dlgRef = this.dialog.open(ProcessingComponent, {
            disableClose: true
        });
        dlgRef.componentInstance.content = content;
        return () => dlgRef.close();
    }
}