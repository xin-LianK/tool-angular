import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { SpinnerConfig } from './spinner-config';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {


  constructor(private spinnerService: SpinnerService) { }
  config: SpinnerConfig;
  private configChanged: Subscription;
  ngOnInit() {
    this.configChanged = this.spinnerService.config.subscribe((c: SpinnerConfig) => {
      this.config = c;
    });
  }
  ngOnDestroy(): void {
    this.configChanged.unsubscribe();
  }
}
