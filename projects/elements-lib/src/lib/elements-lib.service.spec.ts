import { TestBed } from '@angular/core/testing';

import { ElementsLibService } from './elements-lib.service';

describe('ElementsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementsLibService = TestBed.get(ElementsLibService);
    expect(service).toBeTruthy();
  });
});
