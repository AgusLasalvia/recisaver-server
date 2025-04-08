import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const corsOptions: CorsOptions = {
		origin: '*', // Permite todas las solicitudes de cualquier origen. Asegúrate de restringir esto en producción.
		methods: 'GET, POST, PUT, DELETE', // Métodos permitidos
		allowedHeaders: 'Content-Type, Accept', // Encabezados permitidos
		credentials: true, // Habilita el envío de cookies en solicitudes entre dominios
	};

	app.enableCors(corsOptions); // Habilita CORS con las opciones configuradas
	await app.listen(process.env.PORT ?? 5000).then(() => {
		console.log(`Server running on port ${process.env.PORT ?? 5000}`)
	});
}
bootstrap();
