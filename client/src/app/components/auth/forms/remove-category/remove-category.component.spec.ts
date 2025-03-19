import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCategoryComponent } from './remove-category.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';

describe('RemoveCategoryComponent', () => {
  let component: RemoveCategoryComponent;
  let fixture: ComponentFixture<RemoveCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveCategoryComponent],
      imports: [FormsModule, MaterialModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(RemoveCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
