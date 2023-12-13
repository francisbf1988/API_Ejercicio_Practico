import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Users } from '../entities/users.entity';

@ApiTags('Users')
@Controller('Users')
export class UsersController {
    
    public constructor(
        private usersService: UsersService
    ) {} 

    @Post()
    @ApiOperation({ summary: 'Gestiona la informacion de un usuario en especifico' })
    createE_Colectiva(@Body() _createUserDTO: CreateUserDto): Promise<Users> {
        return this.usersService.addUsers(_createUserDTO);
    }
}


