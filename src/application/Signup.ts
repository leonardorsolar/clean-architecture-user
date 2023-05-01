import UserRepositoryMemory from "../infra/UserRepositoryMemory";

export default class Signup {
  constructor(readonly userRepository: UserRepositoryMemory) {}

  execute(input: any): any {
    // tradução do dto em algo fixo controlado
    // user

    this.userRepository.save(input);
    return input;
  }
}

type Input = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
};
