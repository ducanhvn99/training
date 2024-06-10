import { Module } from "@nestjs/common";
import { AccountModule } from "src/account/account.module";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
// import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { APP_GUARD } from "@nestjs/core";
// import { AuthGuard } from "./auth.guard";

@Module({
    imports: [
      AccountModule,
      PassportModule,
      JwtModule.register({
        // global: true,
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
    // controllers: [AuthController],
    exports: [AuthService],
  })
  export class AuthModule {}
  