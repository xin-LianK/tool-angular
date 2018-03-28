import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../share/tips';
import { LoadingService } from '../../share/loading';
import { SpinnerService } from '../../share/spinner';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  visible = false;
  constructor(
    private tipsService: TipsService,
    private loadingService: LoadingService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
  }

  showTips() {
    this.tipsService.set({ content: '自定义提示：3秒后消失', timeout: 3000 })
  }
  showLoading() {
    this.loadingService.set({ Visible: true });
  }

  toggleSpinner() {
    this.visible = !this.visible;
    this.spinnerService.ser({ Visible: this.visible })
  }
}
