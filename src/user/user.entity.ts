import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Favorite } from '../favorite/favorite.entity'
@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true, nullable: false })
	username: string;

	@Column({ nullable: false })
	password: string;

	@Column({ unique: true, nullable: false })
	email: string;


	@OneToMany(() => Favorite, favorite => favorite.user)  // Relación inversa con Favorite
	favorites: Favorite[];
}

