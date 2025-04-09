// services/UserService.ts
import { UserRepository } from "@repositories/user.repository";
import { User } from "../entities/User";

export class UserService {
  
  // Método no estático para acceder al repositorio
  static async findByUsernameAndPassword(username: string, password: string) {
    // Llamamos al repositorio para buscar al usuario
    const user = await UserRepository.findByUsernameAndPassword(username, password);

    // Si no se encuentra al usuario, lanzamos un error
    if (!user) {
      throw new Error("User not found");
    }

    // Retornamos el usuario encontrado
    return user;
  }


	static async register(user:User){
		// Llamamos al repositorio para registrar al usuario
		const newUser = await UserRepository.register(user);

		// Si no se pudo registrar al usuario, lanzamos un error
		if (!newUser) {
			throw new Error("User registration failed");
		}

		// Retornamos el usuario registrado
		return newUser;
	}
}
