import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyComponent } from './vocabulary.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('VocabularyComponent', () => {
  let component: VocabularyComponent;
  let fixture: ComponentFixture<VocabularyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocabularyComponent],
      imports: [AppRoutingModule, HttpClientModule]
    });
    fixture = TestBed.createComponent(VocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
