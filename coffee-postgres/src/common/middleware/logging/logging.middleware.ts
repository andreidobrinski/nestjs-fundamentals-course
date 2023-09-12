import { Injectable, NestMiddleware } from '@nestjs/common';

// middleware can be a function or a class
// function middleware is stateless, cannot inject dependencies, doesn't have access to Nest container
// class middleware can rely on dependencies and inject providers registered in the same module scope
@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('Request-response time');
    console.log('hi from middleware');
    res.on('finish', () => console.timeEnd('Request-response time'));

    next();
  }
}
