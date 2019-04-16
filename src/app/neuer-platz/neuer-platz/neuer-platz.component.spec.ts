import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuerPlatzComponent } from './neuer-platz.component';

describe('NeuerPlatzComponent', () => {
  let component: NeuerPlatzComponent;
  let fixture: ComponentFixture<NeuerPlatzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuerPlatzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuerPlatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
