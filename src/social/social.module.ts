import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UsersService } from './service/users.service';
import { UsersController } from './controllers/users.controller';
import { Friends } from './entities/friends.entity';
import { PostEntity } from './entities/Post.entity';
import { PostService } from './service/post.service';
import { PostController } from './controllers/post.controller';
import { WallsController } from './controllers/walls.controller';
import { NetworkController } from './controllers/network.controller';
import { FriendsService } from './service/friend.service';
import { Follower } from './entities/follower.entity';
import { FollowerService } from './service/follower.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
       Users,
       Friends,
       PostEntity,
       Follower
      ]),
    ],
    providers: [
      UsersService,
      PostService,
      FriendsService,
      FollowerService
    ],
    controllers: [
       UsersController,
       PostController,
       WallsController,
       NetworkController,
    ],
  })
export class SocialModule {}
