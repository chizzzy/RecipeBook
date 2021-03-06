import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeModalComponent } from './edit-recipe-modal.component';
import {AppModule} from '../../../app.module';

describe('EditRecipeModalComponent', () => {
  let component: EditRecipeModalComponent;
  let fixture: ComponentFixture<EditRecipeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecipeModalComponent]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
