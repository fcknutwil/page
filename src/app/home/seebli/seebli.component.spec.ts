import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeebliComponent } from './seebli.component';

describe('SeebliComponent', () => {
  let component: SeebliComponent;
  let fixture: ComponentFixture<SeebliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeebliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeebliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
