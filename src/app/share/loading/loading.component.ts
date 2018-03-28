import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoadingConfig } from './loading-config';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
  config: LoadingConfig;
  configChanged: Subscription;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.configChanged = this.loadingService.config.subscribe((c: LoadingConfig) => {
      this.config = c;
    })
  }
  ngOnDestroy(): void {
    this.configChanged.unsubscribe();
  }
}
