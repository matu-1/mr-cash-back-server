import { Controller, Post, Req, UseGuards, Get, Body } from '@nestjs/common';
import { Request } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiBody, ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { Response } from '../../utils/response';
import { Public } from 'src/decorators/public.decorator';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { User } from 'src/decorators/user.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginDto })
  @Post('login')
  async login(@Req() req: Request) {
    const result = this.authService.login(req.user as any);
    return new Response(result);
  }

  @Public()
  @Post('register')
  async register(@Body() body: CreateUserDto) {
    const result = await this.authService.register(body);
    return new Response(result);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return new Response(req.user);
  }

  @ApiOperation({ summary: 'Renew the token' })
  @Get('renew')
  renewToken(@User() user: any) {
    const result = this.authService.renew(user);
    return new Response(result);
  }
}
