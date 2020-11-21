import { TestBed } from '@angular/core/testing';

import { AdvancedInputService } from './advanced-input.service';

describe('AdvancedInputService', () => {
  let service: AdvancedInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
