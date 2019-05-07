import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessTestComponent } from './less-test.component';

describe('LessTestComponent', () => {
  let component: LessTestComponent;
  let fixture: ComponentFixture<LessTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
