import { TestBed, inject } from '@angular/core/testing';

import { IndexPageService } from './index-page.service';

describe('IndexPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexPageService]
    });
  });

  it('should be created', inject([IndexPageService], (service: IndexPageService) => {
    expect(service).toBeTruthy();
  }));
});
