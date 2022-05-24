import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JSDOM } from 'jsdom';


@Injectable()
export class CommitsCrawlerService {
  constructor(private httpService: HttpService, private configService: ConfigService) { }

  async getCommits() {
    const url = this.configService.get<string>('URL_GITHUB_CRAWLER');
    const userGit = this.configService.get<string>('USER_GITHUB');
    const repositoryGit = this.configService.get<string>('REPOSITORY_GITHUB');
    
    const response = await this.httpService.get(url.replace('$user', userGit).replace('$repository', repositoryGit)).toPromise();
    const { document } = (new JSDOM(response.data)).window;
    const commitsNodes = document.getElementsByClassName('js-commits-list-item');
    let commits = [];
    [...commitsNodes].forEach(element => {
      const commitURL = element.querySelector("p a").getAttribute('href');
      const sha = commitURL.slice(commitURL.indexOf('t/') + 2)
      commits.push(
        {
          node_id: sha,
          html_url: "https://github.com" + element.querySelector("p a").getAttribute('href'),
          commit: {
            message: element.querySelector("p a").innerHTML,
            author: {
              name: element.querySelector("div .commit-author").innerHTML
            }
          },
        }
      )
    });
    return commits
  }
}
