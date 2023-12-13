import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Follower {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => Users, user => user.follower, { onDelete: 'CASCADE', nullable: false})
    users: Users;
}
