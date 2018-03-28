import { Component, OnInit, OnDestroy } from '@angular/core';
import { TipsService } from './tips.service';
import { TipsConfig } from './tips-config';
import { Subscription } from 'rxjs/Subscription';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translateY(0)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class TipsComponent implements OnInit, OnDestroy {
  config: TipsConfig;
  configChanged: Subscription;
  constructor(private tipsService: TipsService) { }
  ngOnInit() {
    this.configChanged = this.tipsService.config.subscribe((c: TipsConfig) => {
      this.config = c;
      if (this.config) {
        let timeout = 3000;
        if (this.config.timeout && this.config.timeout > 0) {
          timeout = c.timeout;
        }
        setTimeout(() => {
          this.config = null;
        }, timeout);
      }
    })
  }
  ngOnDestroy(): void {
    this.configChanged.unsubscribe();
  }
}
