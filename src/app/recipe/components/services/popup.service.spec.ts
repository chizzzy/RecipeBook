import { TestBed } from '@angular/core/testing';

import { PopupService } from './popup.service';
import {AppModule} from '../../../app.module';

describe('PopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));

  it('should be created', () => {
    const service: PopupService = TestBed.get(PopupService);
    expect(service).toBeTruthy();
  });
});
