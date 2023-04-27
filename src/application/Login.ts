export default class Login {
  constructor(readonly variável: string) {}

  execute(input: any): any {
    return input;
  }
}

type Input = {
  email: string;
  password: string;
};
