import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';

@Module({
  imports: [ConfigModule],
  providers: [{ provide: APP_GUARD, useClass: ApiKeyGuard }],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // works for all routes
    consumer.apply(LoggingMiddleware).forRoutes('*');

    // works for 'coffees' routes
    // consumer.apply(LoggingMiddleware).forRoutes('coffees');

    // excludes 'coffees' routes
    // consumer.apply(LoggingMiddleware).exclude('coffees').forRoutes('*');

    // works for GET on 'coffees' routes
    // consumer
    //   .apply(LoggingMiddleware)
    //   .forRoutes({ path: 'coffees', method: RequestMethod.GET });
  }
}
