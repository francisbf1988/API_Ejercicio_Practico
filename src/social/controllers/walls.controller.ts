import { Controller, Get, Post, Body, Delete, Param, Put, HttpStatus, Req, Res } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from '../entities/users.entity';

@ApiTags('social')
@Controller('Walls')
export class WallsController {
    
    public constructor(
        private postService: PostService
    ) {} 

    @Get(':userId')
    @ApiOperation({ summary: 'Devuelve información sobre las publicaciones de un usuario en especifico' })
    @ApiResponse({
    status: HttpStatus.OK,
    description: 'Datos de las publicaciones de un usuario en especifico',
    type: Post,
  })
    async getAlumno(@Param('userId') userId: number, @Req() request: Request, @Res() res): Promise<Users> {
      let message = 'OK';
      let startTime = Date.now();
      let data = await this.postService.walls(userId);

      if(!data) {
        message = 'No se encuentra ninguna publicacion disponible realizada por el usuario';
      }

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: message,
        data: data,
      });
    }
}


