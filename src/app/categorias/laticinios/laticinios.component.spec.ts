import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaticiniosComponent } from './laticinios.component';

describe('LaticiniosComponent', () => {
  let component: LaticiniosComponent;
  let fixture: ComponentFixture<LaticiniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaticiniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaticiniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
