import { TestBed } from '@angular/core/testing';

import { PlayerchoiceService } from './playerchoice.service';

describe('PlayerchoiceService', () => {
  let service: PlayerchoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerchoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
