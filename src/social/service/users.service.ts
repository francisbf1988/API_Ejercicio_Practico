import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { Friends } from '../entities/friends.entity';

@Injectable()
export class UsersService {
    public constructor(
        @InjectRepository(Users) 
        private readonly usersRepository: Repository<Users>,
    ) {}

    async addUsers(userDto: CreateUserDto): Promise<Users> {
        const newUser = this.usersRepository.create(userDto);
        return await this.usersRepository.save(newUser);
    }

    async getUsuarios(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    
}