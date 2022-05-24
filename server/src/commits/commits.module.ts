import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CommitsController } from './commits.controller';
import { CommitsServiceGH } from './commitsGH.service';
import { ConfigModule } from '@nestjs/config';
import { CommitsCrawlerService } from './commitsCrawler.service.ts';
import { CommitsService } from './commits.service';

@Module({
  imports:[HttpModule,ConfigModule.forRoot()],
  controllers: [CommitsController],
  providers: [CommitsServiceGH,CommitsCrawlerService,CommitsService]
})
export class CommitsModule {}
