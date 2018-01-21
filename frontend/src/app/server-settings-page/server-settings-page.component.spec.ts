import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSettingsPageComponent } from './server-settings-page.component';

describe('ServerSettingsPageComponent', () => {
  let component: ServerSettingsPageComponent;
  let fixture: ComponentFixture<ServerSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
