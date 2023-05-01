import UserRepositoryMemory from "../infra/UserRepositoryMemory";

export default class Login {
  constructor(readonly userRepository: UserRepositoryMemory) {}

  async execute(input: any): Promise<any> {
    const user = this.userRepository.getByEmail(input.email);
    // validação
    if (!user) throw new Error("Email inválido");
    if (user.password !== input.password) {
      throw new Error("Autenticação inválida");
    }
    return user;
    return {
      name: user.firstName,
      token: "1234567890",
    };
  }
}

type Input = {
  email: string;
  password: string;
};

type Output = {
  name: string;
  token: string;
};
