import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import AuthService from "./auth/auth.service";
import LocalAuthGuard from "./auth/local-auth.guard";
import { Public } from "./auth/decorators/pulic.decorator";

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    debugger;
    console.log(req.body);
    // console.log(typeof req.body); 
    return this.authService.login(req.user);
  }
}