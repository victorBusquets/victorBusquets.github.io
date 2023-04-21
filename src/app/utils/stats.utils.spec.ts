import { TestBed } from '@angular/core/testing';
import { StatsUtils } from './stats.utils';

describe('StatsUtils', () => {
  let statsUtils = new StatsUtils();

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(statsUtils).toBeTruthy();
  });
});
