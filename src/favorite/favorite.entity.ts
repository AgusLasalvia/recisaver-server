import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column, Unique } from 'typeorm';
import { User } from '../user/user.entity';  // Asumiendo que tienes una entidad de User
import { Recipe } from '../recipe/recipe.entity';  // Asumiendo que tienes una entidad de Recipe

@Entity()
@Unique(["userId", "foodId"])  // Asegura que cada usuario tenga un único plato favorito
export class Favorite {

  @ManyToOne(() => User, user => user.favorites)  // Relación con la tabla de usuarios
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Recipe, recipe => recipe.favorites)  // Relación con la tabla de recetas
  @JoinColumn({ name: 'foodId' })
  recipe: Recipe;

  @PrimaryColumn()
  userId: number;  // Clave primaria compuesta por userId

  @PrimaryColumn()
  foodId: number;  // Clave primaria compuesta por foodId
}
