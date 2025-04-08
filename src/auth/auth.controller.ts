import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@Post('platform')
	async platformLogin(@Body() body: { username: string; password: string }) {
		console.log(body);
		return this.authService.login(body.username, body.password);
	}
}
