import { TestBed, inject } from '@angular/core/testing';

import { JcloudDataService } from './jcloud-data.service';

describe('JcloudDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JcloudDataService]
    });
  });

  it('should be created', inject([JcloudDataService], (service: JcloudDataService) => {
    expect(service).toBeTruthy();
  }));
});
