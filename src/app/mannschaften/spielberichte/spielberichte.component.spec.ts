import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielberichteComponent } from './spielberichte.component';

describe('SpielberichteComponent', () => {
  let component: SpielberichteComponent;
  let fixture: ComponentFixture<SpielberichteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpielberichteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielberichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
