import { TestBed } from '@angular/core/testing';

import { PokeshareService } from './pokeshare.service';

describe('PokeshareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeshareService = TestBed.get(PokeshareService);
    expect(service).toBeTruthy();
  });
});
