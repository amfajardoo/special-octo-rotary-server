import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AxiosResponseInterceptor } from './providers/axios-response.interceptor';
import { ErrorsInterceptor } from './providers/errors.interceptor';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ALLOWED_ORIGIN,
  });
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(
    new AxiosResponseInterceptor(),
    new ErrorsInterceptor(),
  );
  await app.listen(port);
}
bootstrap();
