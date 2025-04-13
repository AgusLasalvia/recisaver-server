import { AuthService } from "../app/services/auth.service";
import { Request, Response } from "express";

export class AuthController {

	static async login(req: Request, res: Response) {
		const { username, password } = req.body;
		console.log(username)

		const user = await AuthService.findByUsernameAndPassword(username, password);
		console.log(user)
		user != null
			? res.status(200).json(user)
			: res.status(404).json({ message: "User Not Found" });

	}



}