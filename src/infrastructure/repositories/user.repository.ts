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
		return user ? new dto.LoginDto(user.username, user.email) : null;
	}


	static async register(user: dto.RegisterDto): Promise<dto.LoginDto | null> {
		const existingUser = await prisma.user.findFirst({
			select: {
				username: true,
				email: true
			},
			where: {
				OR: [
					{ username: user.username },
					{ email: user.email }
				]
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
