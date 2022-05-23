import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';

@Injectable()
export class CommitsServiceGH {
    constructor(private configService: ConfigService){}
    
    async getCommits() {

        const devToken = this.configService.get<string>('TOKEN_GITHUB');
        const userGit = this.configService.get<string>('USER_GITHUB');
        const repositoryGit = this.configService.get<string>('REPOSITORY_GITHUB');

        const octokit = new Octokit({
            auth: devToken
        })

        return await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: userGit,
            repo: repositoryGit
        })

    }
}
