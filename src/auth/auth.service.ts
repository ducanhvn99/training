import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AccountService } from "src/account/account.service";

@Injectable()
export class AuthService {
  constructor(private accountService: AccountService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const account = await this.accountService.findOneByUsername(username);
    if (account && account.password === pass) {
      const { password, ...result } = account;
      return result;
    }
    return null;
  }

  async login(account: any) {
    const payload = { username: account.username};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}