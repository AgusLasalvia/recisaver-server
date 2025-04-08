import {
	Controller,
	Post,
	Get,
	Body,
	UseInterceptors,
	UploadedFile,
} from '@nestjs/common';

import { FavoriteService } from './favorite.service';

@Controller('recipe')
export class FavoriteController {
	constructor(private readonly recipeService: FavoriteService) {}


	@Get()
	async test() {
		return this.recipeService.findAll();
	}
}
