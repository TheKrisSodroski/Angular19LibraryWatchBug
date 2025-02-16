import { TestBed } from '@angular/core/testing';

import { MyTestLibraryService } from './my-test-library.service';

describe('MyTestLibraryService', () => {
  let service: MyTestLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTestLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
