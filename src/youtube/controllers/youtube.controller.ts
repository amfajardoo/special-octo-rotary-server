import { Controller, Get, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { YoutubeResponse } from '../models/youtube';
import { YoutubeService } from '../services/youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private ytService: YoutubeService) {}

  @Get('/videos')
  getYoutubeVideos(
    @Query('query') query: string,
  ): Observable<AxiosResponse<YoutubeResponse>> {
    return this.ytService.getVideos(query);
  }
}
