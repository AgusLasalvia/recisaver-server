// services/UserService.ts
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import * as dto from "../../app/dto/user.dto";

export class AuthService {

	static async findByUsernameAndPassword(username: string, password: string): Promise<dto.LoginDto | null> {
		const user = await UserRepository.findByUsernameAndPassword(username, password);
		return user != null ? user : null;
	}


	static async register(user: dto.RegisterDto): Promise<dto.LoginDto | null> {
		const newUser = await UserRepository.register(user);
		if (!newUser) {
			throw new Error("User registration failed");
		}

		// Retornamos el usuario registrado
		return newUser;
	}
}
