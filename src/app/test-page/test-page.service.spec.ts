import { TestBed, inject } from '@angular/core/testing';

import { TestPageService } from './test-page.service';

describe('TestPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestPageService]
    });
  });

  it('should be created', inject([TestPageService], (service: TestPageService) => {
    expect(service).toBeTruthy();
  }));
});
