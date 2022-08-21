import { TestBed } from '@angular/core/testing';

import { StudentservicesService } from './studentservices.service';

describe('StudentservicesService', () => {
  let service: StudentservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
