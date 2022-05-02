import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SpotifyModule } from './spotify/spotify.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SpotifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
