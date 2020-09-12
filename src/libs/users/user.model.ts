import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskModel } from '../tasks/task.model';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => TaskModel,
    task => task.user,
    { cascade: true },
  )
  tasks?: TaskModel[];
}
