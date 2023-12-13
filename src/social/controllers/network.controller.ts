import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Friends } from '../entities/friends.entity';
import { Follower } from '../entities/follower.entity';
import { FriendsService } from '../service/friend.service';
import { FollowerService } from '../service/follower.service';

@ApiTags('network')
@Controller('users')
export class NetworkController {
    
    public constructor(
        private friendService: FriendsService,
        private fallowerServicre: FollowerService,
    ) {} 

    @Post(':userId/friends/:friendId')
    async addFriend(
        @Param('userId') userId: number, 
        @Param('friendId') friendId: number,
        @Body() friend: Friends,
        ): Promise<Friends> {
        return await this.friendService.addFriendToUser(userId, friend);
    }

    @Post(':userId/followers/:followerId')
    async addFollowers(
        @Param('userId') userId: number, 
        @Param('followerId') followerId: number,
        @Body() follower: Follower,
        ): Promise<Follower> {
        return await this.fallowerServicre.addFollowerToUser(userId, follower);
    }
}
