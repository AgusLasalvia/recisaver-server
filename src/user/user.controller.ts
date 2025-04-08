import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new')
  async create(@Body() userData: User): Promise<User | null> {
    return this.userService.createUser(userData);
  }

  @Get('')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
