export default class UserRepositoryDataBase {
  constructor(readonly variável: string) {}

  save(user: any): any {
    //armazenar no banco
    //armazenar em memória
    return user;
  }
  getByEmail(email: any): any {
    //armazenar no banco
    //armazenar em memória
    return email;
  }
}
