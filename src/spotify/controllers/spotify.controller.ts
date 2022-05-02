import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/token-response';
import { SpotifyService } from '../services/spotify.service';

@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyService: SpotifyService) {}

  @Get('/token')
  getSpotifyToken(): Observable<TokenResponse> {
    return this.spotifyService.getToken();
  }
}
