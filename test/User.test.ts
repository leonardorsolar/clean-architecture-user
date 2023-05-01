import User from "../src/domain/User";

describe("signup", () => {
  test("Deve criar um usuário válido", async () => {
    //given - dado que
    const input = {
      firstName: "Miguel",
      lastName: "Solar",
      email: "miguel@gmail.com",
      password: "123456",
      //token: "1234567890",
      age: "8",
    };
    //when - quando acontecer algo
    const user = new User(input.firstName, input.lastName, input.email, input.password, input.age);
    //then - então faça isso
    expect(user.email).toBe("miguel@gmail.com");
  });

  test("Não criar um usuário com nome inválido", async () => {
    //given - dado que
    const input = {
      firstName: "Mi",
      lastName: "Solar",
      email: "miguel@gmail.com",
      password: "123456",
      //token: "1234567890",
      age: "8",
    };
    //when - quando acontecer algo
    const user = new User(input.firstName, input.lastName, input.email, input.password, input.age);
    //then - então faça isso
    expect(() => new User(input.firstName, input.lastName, input.email, input.password, input.age)).toThrow(new Error(""));
  });
});
