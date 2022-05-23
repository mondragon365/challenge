import { Controller, Get } from '@nestjs/common';
import { CommitsServiceGH } from './commitsGH.service';

@Controller('commits')
export class CommitsController {
    constructor(private readonly commitsServiceGH:CommitsServiceGH){}
    @Get()
    getCommits(){        
        return this.commitsServiceGH.getCommits();
    }
}
