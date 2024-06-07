import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AccountService } from "src/account/account.service";

@Injectable()
export class AuthService {
  constructor(private accountService: AccountService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const account = await this.accountService.findOneByUsername(username);
    if (account?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: account.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}