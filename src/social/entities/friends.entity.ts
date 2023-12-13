import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Friends {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => Users, user => user.friends, { onDelete: 'CASCADE', nullable: false})
    users: Users;
}
