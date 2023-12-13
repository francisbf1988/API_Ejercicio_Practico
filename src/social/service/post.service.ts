import { Injectable, HttpException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entities/Post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';

import { DataSource } from 'typeorm';

@Injectable()
export class PostService {
    public constructor(
        @InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>,
        @InjectDataSource() private dataSource: DataSource,
    ) {}

    async createPost(postDto: CreatePostDto): Promise<PostEntity> {
        const post = new PostEntity();
        post.user = {id: postDto.userId} as any;
        post.text = postDto.text;
        post.visibility = postDto.visibility;

        return await this.postRepository.save(post)
    }

    async getPost(): Promise<PostEntity[]> {
        return await this.postRepository.find();
    }

    async walls(userId:number) {
       return await this.dataSource.query(`SELECT social.post.text, social.users.fullName, social.post.postedOn FROM social.post INNER JOIN social.users ON social.post.userId = social.users.id WHERE social.users.id = ${userId}`)
    }
}

