import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorAddPanelComponent } from './moderator-add-panel.component';

describe('ModeratorAddPanelComponent', () => {
  let component: ModeratorAddPanelComponent;
  let fixture: ComponentFixture<ModeratorAddPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorAddPanelComponent]
    });
    fixture = TestBed.createComponent(ModeratorAddPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
