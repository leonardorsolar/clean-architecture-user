export default class User {
  constructor(readonly firstName: string, readonly lastName: string, readonly email: string, readonly password: string, readonly age: string) {
    // validação do nome
    if (firstName.length < 4) {
      throw new Error("O nome tem que ter mais de 3 caracter");
    }
    // validação do password...
  }
}
