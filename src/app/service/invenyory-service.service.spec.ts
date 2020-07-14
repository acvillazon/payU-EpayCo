import { TestBed } from '@angular/core/testing';

import { InvenyoryServiceService } from './invenyory-service.service';

describe('InvenyoryServiceService', () => {
  let service: InvenyoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvenyoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
