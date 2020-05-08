import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoFeiranteComponent } from './card-produto-feirante.component';

describe('CardProdutoFeiranteComponent', () => {
  let component: CardProdutoFeiranteComponent;
  let fixture: ComponentFixture<CardProdutoFeiranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProdutoFeiranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProdutoFeiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
