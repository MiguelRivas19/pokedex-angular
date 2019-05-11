import { TestBed } from '@angular/core/testing';

import { PokegeneratorService } from './pokegenerator.service';

describe('PokegeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokegeneratorService = TestBed.get(PokegeneratorService);
    expect(service).toBeTruthy();
  });
});
