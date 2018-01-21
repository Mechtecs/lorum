import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGroupEditComponent } from './server-group-edit.component';

describe('ServerGroupEditComponent', () => {
  let component: ServerGroupEditComponent;
  let fixture: ComponentFixture<ServerGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
