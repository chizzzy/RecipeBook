import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import {AppModule} from '../../../app.module';

describe('RecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));

  it('should be created', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });
});
