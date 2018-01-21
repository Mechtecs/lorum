import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGroupServerRowEditComponent } from './server-group-server-row-edit.component';

describe('ServerGroupServerRowEditComponent', () => {
  let component: ServerGroupServerRowEditComponent;
  let fixture: ComponentFixture<ServerGroupServerRowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerGroupServerRowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerGroupServerRowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
