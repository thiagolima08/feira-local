import { TestBed } from '@angular/core/testing';

import { ProdutoFeiranteService } from './produto-feirante.service';

describe('ProdutoFeiranteService', () => {
  let service: ProdutoFeiranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoFeiranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
