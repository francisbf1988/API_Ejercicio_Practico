import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, JoinTable } from 'typeorm';
import { PostEntity } from './Post.entity';
import { Friends } from './friends.entity';
import { Follower } from './follower.entity';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:254, nullable:false, unique:true})
    fullName:string;

    // relacion entre usuario y publicaciones
    @OneToMany(() => PostEntity, post => post.user)
    post:PostEntity[];

    // relacion entre usuario y amigos
    @OneToMany(() => Friends, friend => friend.users)
    friends: Friends[];

    // relacion entre los usuario y seguidores
    @OneToMany(() => Follower, follower => follower.users)
    follower: Follower[];

    @CreateDateColumn()
    createdAt: Date;
}
