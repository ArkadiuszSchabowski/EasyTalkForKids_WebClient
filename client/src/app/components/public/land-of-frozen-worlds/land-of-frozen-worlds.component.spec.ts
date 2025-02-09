import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOfFrozenWorldsComponent } from './land-of-frozen-worlds.component';

describe('LandOfFrozenWorldsComponent', () => {
  let component: LandOfFrozenWorldsComponent;
  let fixture: ComponentFixture<LandOfFrozenWorldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandOfFrozenWorldsComponent]
    });
    fixture = TestBed.createComponent(LandOfFrozenWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
