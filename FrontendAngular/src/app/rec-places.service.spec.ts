import { TestBed } from '@angular/core/testing';

import { RecPlacesService } from './rec-places.service';

describe('RecPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecPlacesService = TestBed.get(RecPlacesService);
    expect(service).toBeTruthy();
  });
});
