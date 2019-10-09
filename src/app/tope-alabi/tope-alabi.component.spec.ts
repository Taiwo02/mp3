import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopeAlabiComponent } from './tope-alabi.component';

describe('TopeAlabiComponent', () => {
  let component: TopeAlabiComponent;
  let fixture: ComponentFixture<TopeAlabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopeAlabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopeAlabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
