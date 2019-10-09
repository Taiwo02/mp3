import { TestBed } from '@angular/core/testing';

import { Mp3serviceService } from './mp3service.service';

describe('Mp3serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Mp3serviceService = TestBed.get(Mp3serviceService);
    expect(service).toBeTruthy();
  });
});
