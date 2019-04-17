import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannschaftenComponent } from './mannschaften.component';

describe('MannschaftenComponent', () => {
  let component: MannschaftenComponent;
  let fixture: ComponentFixture<MannschaftenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannschaftenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannschaftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
