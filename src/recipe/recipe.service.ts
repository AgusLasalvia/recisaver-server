import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}

  async create(
    createRecipe: Recipe,
    file: Express.Multer.File,
  ): Promise<Recipe> {
    const recipe = this.recipeRepository.create(createRecipe);
    return this.recipeRepository.save(recipe);
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({
      where: { id },
      relations: ['ingredients'],
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return recipe;
  }

  async update(id: number, updateRecipeDto: Recipe): Promise<Recipe> {
    const recipe = await this.findOne(id);
    Object.assign(recipe, updateRecipeDto);
    return this.recipeRepository.save(recipe);
  }

  async remove(id: number): Promise<void> {
    const result = await this.recipeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
  }
}
