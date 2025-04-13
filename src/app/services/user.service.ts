// services/UserService.ts
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import * as dto from "../../app/dto/user.dto";
export class UserService {

	// Método no estático para acceder al repositorio
	static async register(user: dto.RegisterDto): Promise<dto.LoginDto | null> {
		const newUser = await UserRepository.register(user);
		if (!newUser) {
			return null
		}

		// Retornamos el usuario registrado
		return newUser;
	}
}
