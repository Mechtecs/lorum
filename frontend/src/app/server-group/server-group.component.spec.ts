import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGroupComponent } from './server-group.component';

describe('ServerGroupComponent', () => {
  let component: ServerGroupComponent;
  let fixture: ComponentFixture<ServerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
