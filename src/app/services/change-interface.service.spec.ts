import { TestBed } from '@angular/core/testing';

import { ChangeInterfaceService } from './change-interface.service';

describe('ChangeInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeInterfaceService = TestBed.get(ChangeInterfaceService);
    expect(service).toBeTruthy();
  });
});
