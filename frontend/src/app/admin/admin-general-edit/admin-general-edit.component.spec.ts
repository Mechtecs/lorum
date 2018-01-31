import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminGeneralEditComponent} from './admin-general-edit.component';

describe('AdminGeneralEditComponent', () => {
  let component: AdminGeneralEditComponent;
  let fixture: ComponentFixture<AdminGeneralEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGeneralEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGeneralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
