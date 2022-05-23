import { Test, TestingModule } from '@nestjs/testing';
import { CommitsServiceGH } from './commitsGH.service';

describe('CommitsServiceGH', () => {
  let service: CommitsServiceGH;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitsServiceGH],
    }).compile();

    service = module.get<CommitsServiceGH>(CommitsServiceGH);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
