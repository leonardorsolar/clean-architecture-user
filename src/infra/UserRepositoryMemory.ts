export default class UserRepositoryMemory {
  users: any[];
  constructor() {
    this.users = [];
  }

  save(user: any): any {
    //armazenar no banco
    //armazenar em memória
    this.users.push(user);
    return user;
  }

  getByEmail(email: any): any | undefined {
    //armazenar no banco
    //armazenar em memória
    return this.users.find((user: any) => user.email === email);
  }
}
