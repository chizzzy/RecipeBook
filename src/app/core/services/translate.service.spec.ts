import { TestBed } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import {AppModule} from '../../app.module';

describe('TranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));
  it('should be created', () => {
    const service: TranslateService = TestBed.get(TranslateService);
    expect(service).toBeTruthy();
  });
});
