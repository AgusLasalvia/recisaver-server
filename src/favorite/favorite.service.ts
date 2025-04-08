import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorite.entity';

@Injectable()
export class FavoriteService {
	constructor(
		@InjectRepository(Favorite)
		private FavoriteRepository: Repository<Favorite>,
	) {}

	async create(
		createFavorite: Favorite,
		file: Express.Multer.File,
	): Promise<Favorite> {
		const Favorite = this.FavoriteRepository.create(createFavorite);
		return this.FavoriteRepository.save(Favorite);
	}

	async findAll(): Promise<Favorite[]> {
		return this.FavoriteRepository.find();
	}

	async findOne(id: number): Promise<Favorite> {
		const Favorite = await this.FavoriteRepository.findOne({
			where: { foodId: id },
			relations: ['ingredients'],
		});

		if (!Favorite) {
			throw new NotFoundException(`Favorite with ID ${id} not found`);
		}

		return Favorite;
	}

	async update(id: number, updateFavoriteDto: Favorite): Promise<Favorite> {
		const favorite = await this.findOne(id);
		Object.assign(favorite, updateFavoriteDto);
		return this.FavoriteRepository.save(favorite);
	}

	async remove(id: number): Promise<void> {
		const result = await this.FavoriteRepository.delete(id);
		if (result.affected === 0) {
			throw new NotFoundException(`Favorite with ID ${id} not found`);
		}
	}
}
