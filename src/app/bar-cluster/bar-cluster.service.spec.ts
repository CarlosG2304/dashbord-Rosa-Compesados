import { TestBed } from '@angular/core/testing';

import { BarClusterService } from './bar-cluster.service';

describe('BarClusterService', () => {
  let service: BarClusterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarClusterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
