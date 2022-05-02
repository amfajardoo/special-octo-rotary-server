import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SpotifyService } from './services/spotify.service';
import { SpotifyController } from './controllers/spotify.controller';

@Module({
  imports: [HttpModule],
  providers: [SpotifyService],
  controllers: [SpotifyController],
})
export class SpotifyModule {}
