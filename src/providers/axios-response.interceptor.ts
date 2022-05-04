import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Response<T> {
  data: T;
}

@Injectable()
export class AxiosResponseInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (
      context.getArgs().length > 0 &&
      context.getArgs()[0].path === '/api/healthcheck'
    ) {
      return next.handle();
    }

    return next.handle().pipe(map(({ data }) => ({ data })));
  }
}
