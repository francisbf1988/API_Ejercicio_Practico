import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Follower } from '../entities/follower.entity';

@Injectable()
export class FollowerService {
    public constructor(
        @InjectRepository(Follower)
        private readonly _followerRepository: Repository<Follower>,
    ) {}

    async addFollowerToUser(userId: number, follower: Follower ) {
        follower.users = {id: userId} as any;
        return await this._followerRepository.save(follower);
    }
}
