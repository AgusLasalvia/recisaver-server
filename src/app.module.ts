import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as dotenv from 'dotenv';
dotenv.config();

// Providers
import { AppService } from './app.service';

// Controllers
import { AppController } from './app.controller';

// Modules
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';
import { FavoriteModule } from './favorite/favorite.module';

// Entities
import { Recipe } from './recipe/recipe.entity';
import { User } from './user/user.entity';
import { Favorite } from './favorite/favorite.entity';

console.log(process.env.PORT)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, Recipe,Favorite],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    RecipeModule,
		FavoriteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
