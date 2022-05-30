import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { YoutubeResponse } from '../models/youtube';

@Injectable()
export class YoutubeService {
  url = 'https://www.googleapis.com/youtube/v3';
  apiKey = this.configService.get<string>('YT_API_KEY');

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  getVideos(query: string): Observable<AxiosResponse<YoutubeResponse>> {
    return this.httpService.get(
      `${this.url}/search?part=snippet&q=${query}&type=video&key=${this.apiKey}&maxResults=3`,
    );
  }
}
