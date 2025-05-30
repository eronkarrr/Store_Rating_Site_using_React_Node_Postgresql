import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";       // User entity फाईलचा योग्य path टाका
import { Rating } from "./rating.entity";   // Rating entity फाईलचा योग्य path टाका

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @ManyToOne(() => User, user => user.stores)
  owner: User;

  @OneToMany(() => Rating, rating => rating.store)
  ratings: Rating[];
}
