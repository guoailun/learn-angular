import { Component, OnInit } from '@angular/core';
import { IndexPageService } from '../index-page/index-page.service';
import { TestPageService } from './test-page.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor(
    private service: IndexPageService,
    private test: TestPageService) { }

  ngOnInit() {
    console.log(this.service.getp());
    console.log(this.test.getNumber());
  }

}
