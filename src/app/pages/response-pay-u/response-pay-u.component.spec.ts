import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsePayUComponent } from './response-pay-u.component';

describe('ResponsePayUComponent', () => {
  let component: ResponsePayUComponent;
  let fixture: ComponentFixture<ResponsePayUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsePayUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsePayUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
