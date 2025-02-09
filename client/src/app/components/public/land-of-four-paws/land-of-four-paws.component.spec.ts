import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOfFourPawsComponent } from './land-of-four-paws.component';

describe('LandOfFourPawsComponent', () => {
  let component: LandOfFourPawsComponent;
  let fixture: ComponentFixture<LandOfFourPawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandOfFourPawsComponent]
    });
    fixture = TestBed.createComponent(LandOfFourPawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
