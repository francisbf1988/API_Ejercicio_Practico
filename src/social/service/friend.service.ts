import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Friends } from '../entities/friends.entity';

@Injectable()
export class FriendsService {
    public constructor(
        @InjectRepository(Friends)
        private readonly friendRepository: Repository<Friends>,
    ) {}

    async addFriendToUser(userId: number, friends: Friends ) {
        friends.users = {id: userId} as any;
        return await this.friendRepository.save(friends);
    }
}
