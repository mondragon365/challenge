import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsServiceGH } from './commitsGH.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ConfigModule.forRoot()],
  controllers: [CommitsController],
  providers: [CommitsServiceGH]
})
export class CommitsModule {}
