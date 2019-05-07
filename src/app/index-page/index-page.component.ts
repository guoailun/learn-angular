import { Component, OnInit } from '@angular/core';
import { IndexPageService } from './index-page.service';
import { TestPageService } from '../test-page/test-page.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.less']
})
export class IndexPageComponent implements OnInit {
  shouldShow = true;
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  constructor(
    private service: IndexPageService,
    private test: TestPageService) { }

  ngOnInit() {
    console.log(this.service.getp());
    console.log(this.test.getNumber());
  }

  show() { this.shouldShow = !this.shouldShow; }

}
