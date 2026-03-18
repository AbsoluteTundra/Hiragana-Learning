import { TestBed } from '@angular/core/testing';

import { HiraganaDictionaryService } from './hiragana-dictionary-service';

describe('HiraganaDictionaryService', () => {
  let service: HiraganaDictionaryService = new HiraganaDictionaryService();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiraganaDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not contain duplicate answers', () => {
    let amountToRetrieve:number = service.hiraganaToRomajiMapping.size;
    let selectedAnswer = service.getMultipleRandomHiragana(amountToRetrieve);

    expect(selectedAnswer.length).toBe(amountToRetrieve);
  });

  it('should not contain more answers then possible', () => {
    let amountToRetrieve: number = service.hiraganaToRomajiMapping.size + 1;
    let selectedAnswer = service.getMultipleRandomHiragana(amountToRetrieve);

    expect(selectedAnswer.length).toBe(service.hiraganaToRomajiMapping.size);
  });
});
