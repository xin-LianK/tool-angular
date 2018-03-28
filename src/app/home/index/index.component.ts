import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../share/tips';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
  }

  showTips() {
    this.tipsService.set({ content: '自定义提示：3秒后消失', timeout: 3000 })
  }
}
