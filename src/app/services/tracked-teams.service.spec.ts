import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrackedTeamsService } from './tracked-teams.service';

describe('TrackedTeamsService', () => {
  let service: TrackedTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TrackedTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
