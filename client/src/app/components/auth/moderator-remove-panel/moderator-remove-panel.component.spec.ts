import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorRemovePanelComponent } from './moderator-remove-panel.component';

describe('ModeratorRemovePanelComponent', () => {
  let component: ModeratorRemovePanelComponent;
  let fixture: ComponentFixture<ModeratorRemovePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorRemovePanelComponent]
    });
    fixture = TestBed.createComponent(ModeratorRemovePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
