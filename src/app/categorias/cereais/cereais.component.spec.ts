import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CereaisComponent } from './cereais.component';

describe('CereaisComponent', () => {
  let component: CereaisComponent;
  let fixture: ComponentFixture<CereaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CereaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CereaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
