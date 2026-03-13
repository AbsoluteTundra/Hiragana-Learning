import { TestBed } from '@angular/core/testing';

import { HiraganaDictionaryService } from './hiragana-dictionary-service';

describe('HiraganaDictionaryService', () => {
  let service: HiraganaDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiraganaDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
