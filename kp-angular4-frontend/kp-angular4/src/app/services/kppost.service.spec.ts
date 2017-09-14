import { TestBed, inject } from '@angular/core/testing';

import { KppostService } from './kppost.service';

describe('KppostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KppostService]
    });
  });

  it('should be created', inject([KppostService], (service: KppostService) => {
    expect(service).toBeTruthy();
  }));
});
