import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyefeleComponent } from './ayefele.component';

describe('AyefeleComponent', () => {
  let component: AyefeleComponent;
  let fixture: ComponentFixture<AyefeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyefeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyefeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
