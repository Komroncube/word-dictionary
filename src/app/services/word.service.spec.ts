import { TestBed } from '@angular/core/testing';

import { WordService } from './word.service';

describe('WordServiceService', () => {
  let service: WordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
