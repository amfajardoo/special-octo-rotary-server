import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { YoutubeService } from './services/youtube.service';
import { YoutubeController } from './controllers/youtube.controller';

@Module({
  imports: [HttpModule],
  providers: [YoutubeService],
  controllers: [YoutubeController],
})
export class YoutubeModule {}
