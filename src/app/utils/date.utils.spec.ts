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

  it('getDaySubstract should return distint info', () => {
    const yesterday = dateUtils.getDaySubstract(1);
    const today = dateUtils.getDaySubstract(0);
    expect(yesterday).not.toEqual(today);
  });

  it('getPreviousDays should return previous days', () => {
    const yesterday = dateUtils.getDaySubstract(1);
    const getOnePreviousDay = dateUtils.getPreviousDays(1);
    const getThreePreviousDays = dateUtils.getPreviousDays(3);
    expect(getOnePreviousDay.length).toBe(1);
    expect(getThreePreviousDays.length).toBe(3);
    expect(getOnePreviousDay[0]).toEqual(yesterday);
  });
});
