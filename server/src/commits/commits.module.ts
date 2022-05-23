import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsServiceGH } from './commits.service';

@Module({
  controllers: [CommitsController],
  providers: [CommitsServiceGH]
})
export class CommitsModule {}
