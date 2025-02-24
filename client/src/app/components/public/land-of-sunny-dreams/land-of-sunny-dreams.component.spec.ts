import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOfSunnyDreamsComponent } from './land-of-sunny-dreams.component';
import { HttpClientModule } from '@angular/common/http';

describe('LandOfSunnyDreamsComponent', () => {
  let component: LandOfSunnyDreamsComponent;
  let fixture: ComponentFixture<LandOfSunnyDreamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandOfSunnyDreamsComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(LandOfSunnyDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
