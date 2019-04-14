import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeimspieleComponent } from './heimspiele.component';

describe('HeimspieleComponent', () => {
  let component: HeimspieleComponent;
  let fixture: ComponentFixture<HeimspieleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeimspieleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeimspieleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
