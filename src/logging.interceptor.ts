import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Context Type: ' + context.getType()); // says 'http'
    const res = context.switchToHttp().getResponse<Response>();
    console.log('Response: ' + res);
    res.setHeader('oops', 'does not work'); // TypeError: res.setHeader is not a function
    return next.handle();
  }
}
