import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOfFrozenWorldsComponent } from './land-of-frozen-worlds.component';
import { HttpClientModule } from '@angular/common/http';

describe('LandOfFrozenWorldsComponent', () => {
  let component: LandOfFrozenWorldsComponent;
  let fixture: ComponentFixture<LandOfFrozenWorldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandOfFrozenWorldsComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(LandOfFrozenWorldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
