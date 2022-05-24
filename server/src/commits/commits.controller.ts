import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitsCrawlerService } from './commitsCrawler.service.ts';

@Controller('commits')
export class CommitsController {
    constructor(private readonly commitsService:CommitsService,private readonly commitsCrawlerService: CommitsCrawlerService){}
    @Get()
    async getCommits(){        
        var data = await this.commitsService.getCommits();   
        if(Array.isArray(data)){
            return data;                
        }             
        return await this.commitsCrawlerService.getCommits(); 
    } 
}
