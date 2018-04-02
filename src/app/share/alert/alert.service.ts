import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert.component';

@Injectable()
export class AlertService {
    constructor(private modalService: NgbModal) { }

    alert(title: string, content: string) {
        const alertRef = this.modalService.open(AlertComponent, { windowClass: 'dark-modal',size:'sm' })
        alertRef.componentInstance.title = title;
        alertRef.componentInstance.content = content;
    }
}