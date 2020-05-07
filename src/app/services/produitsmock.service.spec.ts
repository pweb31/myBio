import { TestBed } from '@angular/core/testing';

import { ProduitsmockService } from './produitsmock.service';

describe('ProduitsmockService', () => {
  let service: ProduitsmockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitsmockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
