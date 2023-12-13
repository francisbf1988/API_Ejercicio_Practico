import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';

/*
export enum visibility {
    visible = 'visible',
    followers = 'followers'
}

*/

@Entity({name:'Post'})
export class PostEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    text: string;

    @Column({default: 'visible'})
    visibility: string;

    @CreateDateColumn()
    postedOn: Date

    @ManyToOne(() => Users, (user) => user.post, { onDelete: 'CASCADE', nullable: false})
    user: Users;

    /*  @Column({
        type: 'enum',
        enum: visibility,
        default: visibility.visible
    })
    post: visibility; */
}
