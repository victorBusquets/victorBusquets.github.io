import { TestBed } from '@angular/core/testing';
import { DateUtils } from './date.utils';

describe('DateUtils', () => {
  let dateUtils = new DateUtils();

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(dateUtils).toBeTruthy();
  });
});
