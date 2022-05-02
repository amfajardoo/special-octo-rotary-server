import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, pluck } from 'rxjs';
import { TokenResponse } from '../models/token-response';

@Injectable()
export class SpotifyService {
  clientId = this.configService.get<string>('CLIENT_ID');
  clientSecret = this.configService.get<string>('CLIENT_SECRET');

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  getToken(): Observable<TokenResponse> {
    const headers = {
      Authorization: `Basic ${Buffer.from(
        `${this.clientId}:${this.clientSecret}`,
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    return this.httpService
      .post(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        { headers },
      )
      .pipe(pluck('data'));
  }
}
