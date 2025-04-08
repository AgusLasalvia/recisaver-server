import {
  Controller,
  Post,
  Get,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  @Post('new')
  @UseInterceptors(FileInterceptor('file')) // 'file' debe coincidir con el campo del FormData
  createRecipe(
    @Body() body: any, // Recibe el resto de los datos del formulario
    @UploadedFile() file: Express.Multer.File, // Recibe el archivo subido
  ) {
    console.log('Form Data:', body);
    console.log('File:', file);

    // if (!file) {
    //   return { message: 'No file uploaded' };
    // }

    // return this.recipeService.create(body, file);
  }

  @Get()
  async test() {
    return this.recipeService.findAll();
  }
}
