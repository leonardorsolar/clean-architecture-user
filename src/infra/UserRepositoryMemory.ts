export default class Signup {
  constructor(readonly variável: string) {}

  execute(input: any): any {
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
