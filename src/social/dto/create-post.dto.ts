import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty()
    readonly userId: number;

    @ApiProperty()
    readonly text: string; 

    @ApiProperty()
    readonly visibility: string;
}
