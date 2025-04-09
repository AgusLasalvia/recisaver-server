import prisma from "../database/prisma";
import * as dto from "../../app/dto/user.dto";



export class UserRepository {
	static async findByUsernameAndPassword(username: string, password: string): Promise<dto.LoginDto | null> {
		const user = await prisma.user.findUnique({
			where: {
				username: username,
				password: password
			},
			select: {
				id: true,
				username: true,
				email: true
			}
		});

		if (!user) {
			return null;
		}

		return new dto.LoginDto(user.username, user.email);
	}


	static async register(user: dto.RegisterDto): Promise<dto.LoginDto | null> {
		const existingUser = await prisma.user.findUnique({
			where: {
				username: user.username
			}
		});

		if (existingUser) {
			return null;
		}

		const newUser = await prisma.user.create({
			data: {
				username: user.username,
				password: user.password,
				email: user.email
			}
		});

		return new dto.LoginDto(newUser.username, newUser.email);
	}
}
