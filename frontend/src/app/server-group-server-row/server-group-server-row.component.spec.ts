import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGroupServerRowComponent } from './server-group-server-row.component';

describe('ServerGroupServerRowComponent', () => {
  let component: ServerGroupServerRowComponent;
  let fixture: ComponentFixture<ServerGroupServerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerGroupServerRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerGroupServerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
