import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOfSunnyDreamsComponent } from './land-of-sunny-dreams.component';

describe('LandOfSunnyDreamsComponent', () => {
  let component: LandOfSunnyDreamsComponent;
  let fixture: ComponentFixture<LandOfSunnyDreamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandOfSunnyDreamsComponent]
    });
    fixture = TestBed.createComponent(LandOfSunnyDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
