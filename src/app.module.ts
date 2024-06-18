import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import AccountModule from './account/account.module';
import ListingModule from './listing/listing.module';
import AuthModule from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, path: url, body } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('close', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      // Object.entries(request).forEach((k,v) => {
      //   this.logger.log(
      //     `${k} - ${v}`
      //   )
      // })
      this.logger.log(
        `${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}`
      );
    });

    next();
  }
}

@Module({
  imports: [AccountModule, ListingModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}