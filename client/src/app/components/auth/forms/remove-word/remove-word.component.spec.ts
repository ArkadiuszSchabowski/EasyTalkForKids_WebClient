import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveWordComponent } from './remove-word.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RemoveWordComponent', () => {
  let component: RemoveWordComponent;
  let fixture: ComponentFixture<RemoveWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveWordComponent],
      imports: [FormsModule, MaterialModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(RemoveWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
