// Login DTO
export class LoginDto{
	public username:string;
 public email:string;

 constructor(username:string, email:string){
	 this.username=username;
	 this.email=email;
 }
}


// Register DTO
export class RegisterDto{
	public username:string;
 public password:string;
 public email:string;

 constructor(username:string, password:string, email:string){
	 this.username=username;
	 this.password=password;
	 this.email=email;
 }
}