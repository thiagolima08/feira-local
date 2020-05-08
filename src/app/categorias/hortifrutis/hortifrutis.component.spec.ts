import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HortifrutisComponent } from './hortifrutis.component';

describe('HortifrutisComponent', () => {
  let component: HortifrutisComponent;
  let fixture: ComponentFixture<HortifrutisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HortifrutisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HortifrutisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
