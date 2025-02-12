import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOfCatTalesComponent } from './land-of-cat-tales.component';

describe('LandOfCatTalesComponent', () => {
  let component: LandOfCatTalesComponent;
  let fixture: ComponentFixture<LandOfCatTalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandOfCatTalesComponent]
    });
    fixture = TestBed.createComponent(LandOfCatTalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
