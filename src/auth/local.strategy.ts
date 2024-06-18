import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import AuthService from "./auth.service";

export var currentAccount: string;

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('authenticate user');
    const account = await this.authService.validateUser(username, password);
    if (!account) {
      console.log("Cannot validate user!")
      throw new UnauthorizedException();
    }
    currentAccount = username;
    return account;
  }
}