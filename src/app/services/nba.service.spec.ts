import { TestBed } from '@angular/core/testing';
import { NbaService } from './nba.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NbaService', () => {
  let service: NbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(NbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
