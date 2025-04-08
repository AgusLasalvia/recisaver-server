import { Module } from '@nestjs/common';
import { Recipe } from './recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
