import { TestBed } from '@angular/core/testing';

import { PlaceIdService } from './place-id.service';

describe('PlaceIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceIdService = TestBed.get(PlaceIdService);
    expect(service).toBeTruthy();
  });
});
