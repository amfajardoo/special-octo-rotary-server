import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { YoutubeModule } from './youtube/youtube.module';
import { AxiosResponseInterceptor } from './providers/axios-response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from './providers/errors.interceptor';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), YoutubeModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AxiosResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class AppModule {}
