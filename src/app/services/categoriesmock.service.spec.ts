import { TestBed } from '@angular/core/testing';

import { CategoriesmockService } from './categoriesmock.service';

describe('CategoriesmockService', () => {
  let service: CategoriesmockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesmockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
