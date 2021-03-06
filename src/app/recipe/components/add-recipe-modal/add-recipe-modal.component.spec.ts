import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeModalComponent } from './add-recipe-modal.component';
import {AppModule} from '../../../app.module';

describe('AddRecipeModalComponent', () => {
  let component: AddRecipeModalComponent;
  let fixture: ComponentFixture<AddRecipeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecipeModalComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
