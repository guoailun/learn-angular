import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestPageService {

  constructor() { }

  getNumber() {
    return 3;
  }
}
