import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Platform Login
  async login(username: string, password: string): Promise<User | null> {
    // Search for existing user filtered by username && password
    const user = await this.userRepository.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (user == undefined) return null;

    return user;
  }
}
