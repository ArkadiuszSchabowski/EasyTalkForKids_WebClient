import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveWordComponent } from './remove-word.component';

describe('RemoveWordComponent', () => {
  let component: RemoveWordComponent;
  let fixture: ComponentFixture<RemoveWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveWordComponent]
    });
    fixture = TestBed.createComponent(RemoveWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
