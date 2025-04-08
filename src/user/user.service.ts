import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  // Empty class constructor
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Creates a new User
  async createUser(userData: User): Promise<User | null> {
    // Search for the user by email
    const verify = await this.findByEmail(userData.email);

    // User already on the DB
    console.log(verify);
    if (verify != undefined) return null;

    //  Create user if not found
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  // Return all existing Users on the DB
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Search for a specific user filter by ID
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }
}
