import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before wrap response interceptor');

    return next
      .handle()
      .pipe(
        tap((data) => console.log('after wrap response interceptor', data)),
      );
  }
}
