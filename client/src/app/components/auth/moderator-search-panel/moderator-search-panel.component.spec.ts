import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorSearchPanelComponent } from './moderator-search-panel.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('ModeratorPanelComponent', () => {
  let component: ModeratorSearchPanelComponent;
  let fixture: ComponentFixture<ModeratorSearchPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeratorSearchPanelComponent],
      imports: [BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModule]
    });
    fixture = TestBed.createComponent(ModeratorSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
