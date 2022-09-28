import { TestBed } from '@angular/core/testing';

import { KebabService } from './kebab.service';

describe('KebabService', () => {
  let service: KebabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KebabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
