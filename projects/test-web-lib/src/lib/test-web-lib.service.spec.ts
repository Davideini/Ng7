import { TestBed } from '@angular/core/testing';

import { TestWebLibService } from './test-web-lib.service';

describe('TestWebLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestWebLibService = TestBed.get(TestWebLibService);
    expect(service).toBeTruthy();
  });
});
