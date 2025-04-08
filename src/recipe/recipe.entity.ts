import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from 'typeorm';
import { Favorite } from '../favorite/favorite.entity';  // Asumiendo que tienes una entidad de Favorite

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user_id: number;

  @Column()
  instructions: string;

  @Column()
  imgUrl: string;

	@OneToMany(() => Favorite, favorite => favorite.user)  // Relación inversa con Favorite
  favorites: Favorite[];
}
