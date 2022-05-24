import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommitsService {
  constructor(private httpService: HttpService, private configService: ConfigService) { }

  async getCommits() {
    const url = this.configService.get<string>('URL_GITHUB');
    const userGit = this.configService.get<string>('USER_GITHUB');
    const repositoryGit = this.configService.get<string>('REPOSITORY_GITHUB');

    var response= await this.httpService.get(url.replace('$user', userGit).replace('$repository', repositoryGit)).toPromise();
    return response.data;
  }  
}
