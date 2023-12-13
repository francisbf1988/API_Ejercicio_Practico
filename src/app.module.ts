import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule  } from '@nestjs/config';
import { SocialModule } from './social/social.module';
import { UsersController } from './social/controllers/users.controller';
import { UsersService } from './social/service/users.service';

@Module({
  imports: [
    ConfigModule.forRoot(),  // detemrina la variable .env para la conexin a la base de datos.
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: false,
      synchronize: !!process.env.DB_SYNC,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
    } as any),
    SocialModule,
  ],
  controllers: [],
})

export class AppModule {}