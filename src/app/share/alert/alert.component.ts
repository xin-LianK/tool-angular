import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
  EventEmitter,
  OnDestroy,
  Output,
  Input
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private ngbRef: NgbModalRef;
  title: string;
  content: string;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClose() {
    this.close.emit();
  }
}
