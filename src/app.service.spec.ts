import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { AccountModule } from "./account/account.module";
import { AppController } from "./app.controller";
import { ListingModule } from "./listing/listing.module";

describe('AppService', () => {
    let appService: AppService;
  
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        imports: [AuthModule, AccountModule, ListingModule],
        controllers: [AppController],
        providers: [AppService],
      }).compile();
  
      appService = app.get<AppService>(AppService);
    });
  
    describe('app service', () => {
      it('should return "Hello World!"', () => {
        expect(appService.getHello()).toBe('Hello World!');
      });
    });
  });