import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth/auth.module";
import { AccountModule } from "./account/account.module";
import { AppService } from "./app.service";
import { ListingModule } from "./listing/listing.module";

describe('AppController', () => {
    let appController: AppController;
  
    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        imports: [AuthModule, AccountModule, ListingModule],
        controllers: [AppController],
        providers: [AppService],
      }).compile();
  
      appController = app.get<AppController>(AppController);
    });
  
    it('should be defined', () => {
      expect(appController).toBeDefined();
    });
  });