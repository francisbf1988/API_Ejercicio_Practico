import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { ApiTags } from '@nestjs/swagger';
import { PostEntity } from '../entities/Post.entity';

@ApiTags('post')
@Controller('post')
export class PostController {
    
    public constructor(
        private postService: PostService
    ) {} 

    @Post()
    async createPost(@Body() _createPostDTO: CreatePostDto): Promise<PostEntity> {
        return await this.postService.createPost(_createPostDTO);
    }
}


