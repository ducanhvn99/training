import { Module } from "@nestjs/common";
import { AccountModule } from "src/account/account.module";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
    imports: [
      AccountModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },})],
    providers: [
      AuthService,
      {
        provide: APP_GUARD,
        useClass: JwtAuthGuard,
      },
      LocalStrategy,
      JwtStrategy,
    ],
    exports: [AuthService],
  })
  export class AuthModule {}
  